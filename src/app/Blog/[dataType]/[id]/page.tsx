// src/app/Blog/[dataType]/[id]/page.tsx

import { notFound } from 'next/navigation'
import {
  articleData,
  NewsData,
} from '@/app/components/Blog/ArticlesData/articlesData'
import facebookIcon from '../../../../../public/ArticlesDisplay/Facebook.svg'
import linkedinIcon from '../../../../../public/ArticlesDisplay/LinkedIn.svg'
import instagramIcon from '../../../../../public/ArticlesDisplay/instagram.svg'
import twitterIcon from '../../../../../public/ArticlesDisplay/Twitter.svg'
import './Articledisplay.scss'
import ArticlesSubscribe from '@/app/components/Blog/[dataType]/[id]/ArticlesSubscribe/ArticlesSubscribe'

// ← This function must be present, exactly named generateStaticParams:
export async function generateStaticParams() {
  // One entry per article:
  const articleParams = articleData.map((item) => ({
    dataType: 'articles',
    id: item.propertyId,
  }))
  // One entry per news item:
  const newsParams = NewsData.map((item) => ({
    dataType: 'news',
    id: item.propertyId,
  }))
  return [...articleParams, ...newsParams]
}

export default function ArticleDisplayPage({
  params,
}: {
  params: { dataType: string; id: string }
}) {
  const { dataType, id } = params
  const dataArray = dataType === 'articles' ? articleData : NewsData
  const contentData = dataArray.find((item) => item.propertyId === id)
  if (!contentData) notFound()

  const socialIcons = [facebookIcon, twitterIcon, instagramIcon, linkedinIcon]

  return (
    <div className='ArticleDisplay-container'>
      <div className='wrapper'>
        <div className='wrapper-assist'>
          <div className='Article-main-section'>
            <h1 className='article-title'>{contentData.cardTitle}</h1>
            <p className='Articles-author'>
              By {contentData.author} | Published on {contentData.postingDate}
            </p>
            <img
              className='articles-image'
              src={contentData.cardImg}
              alt={contentData.cardTitle}
              style={{ width: '100%', height: '500px' }}
            />
            <div className='article-content'>
              <p>{contentData.cardDescription}</p>
              <p className='article-content-data'>{contentData.cardContent}</p>
              <p className='article-Tags'>#Tags: </p>
              <div className='article-tags'>
                {contentData.tags.map((tag, idx) => (
                  <li key={idx} className='ArticleTag-item'>
                    {tag}
                  </li>
                ))}
              </div>
              <div className='article-share'>
                <p className='article-share-content'>Share this article:</p>
                <div className='article-share-icons'>
                  <ul className='article-icons-list'>
                    {socialIcons.map((icon, idx) => (
                      <li key={idx}>
                        <img
                          className='social-media-icon'
                          src={icon.src}
                          alt={`social-${idx}`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <ArticlesSubscribe />

          <div className='Articles-Author-Container'>
            <img
              className='Article-Author-img'
              src={contentData.authorImg}
              alt='authorImg'
            />
            <div className='Author-content'>
              <p className='Author-About'>About the Author</p>
              <p className='Author-About-description'>
                {contentData.authorDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
