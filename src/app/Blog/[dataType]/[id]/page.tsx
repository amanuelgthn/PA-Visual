'use client'

import {
  articleData,
  NewsData,
} from '@/app/components/Blog/ArticlesData/articlesData.ts'
import { useParams } from 'next/navigation'
import LeaveComment from '@/app/components/Blog/[dataType]/LeaveComment/LeaveComment.tsx'
import ArticlesSubscribe from '@/app/components/Blog/[dataType]/[id]/ArticlesSubscribe/ArticlesSubscribe.tsx'
import Link from 'next/link'
import facebookIcon from '../../../../../public/ArticlesDisplay/Facebook.svg'
import linkedinIcon from '../../../../../public/ArticlesDisplay/LinkedIn.svg'
import instagramIcon from '../../../../../public/ArticlesDisplay/instagram.svg'
import twitterIcon from '../../../../../public/ArticlesDisplay/Twitter.svg'
import './Articledisplay.scss'

const Articledisplay = () => {
  const params = useParams()
  const { dataType, id } = params

  let contentData
  if (dataType === 'articles') {
    contentData = articleData.find((item) => item.propertyId === id)
  } else if (dataType === 'news') {
    contentData = NewsData.find((item) => item.propertyId === id)
  }

  if (!contentData) {
    return (
      <div className='ArticleDisplay-container'>
        <h1 className='article-title'>404</h1>
        <h1 className='article-title'>We couldn&apos;t find that page</h1>
        <p>
          Return to Home Page <Link href='/'>here</Link>
        </p>
      </div>
    )
  }

  const socialIcons = [facebookIcon, twitterIcon, instagramIcon, linkedinIcon]

  return (
    <>
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
                <p className='article-content-data'>
                  {contentData.cardContent}
                </p>
                <p className='article-Tags'>#Tags: </p>
                <div className='article-tags'>
                  {contentData.tags.map((tag, index) => (
                    <li key={index} className='ArticleTag-item'>
                      {tag}
                    </li>
                  ))}
                </div>
                <div className='article-share'>
                  <p className='article-share-content'>Share this article:</p>
                  <div className='article-share-icons'>
                    <ul className='article-icons-list'>
                      {socialIcons.map((icon, index) => (
                        <li key={index}>
                          <img
                            className='social-media-icon'
                            src={icon.src}
                            alt={icon}
                          ></img>
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
            <LeaveComment posts={contentData.comments} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Articledisplay
