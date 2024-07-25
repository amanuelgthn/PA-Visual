'use client'
import React from 'react'
import styles from '../admin/adminStyles/dashboard.module.css'; // Import CSS module
import Image from 'next/image';


const Adminpage = () => {
  return (
    <section className={styles.adminwrapper}>
       {/* section1  */}
    <div className={styles.dashboard}>
     <div className={styles.dashboardDesc}>
     <h2>Welcome back, Admin!</h2>
     <p>Here&#39;s an overview of your global property empire.</p>
     </div>
    
     <div className={styles.notification}>
          <Image src="/notificationIcon.png" alt='notification icon' width={25} height={25} objectFit='contain'/>
          <span className={styles.notificationCount}>3</span>
        </div>
    </div>
         {/* section 2 */}
    <div className={styles.total}>
      <div className={styles.totalDesc}>
        <h4>Total Users</h4>
        <h3>1,234</h3>
      </div>
      <div  className={styles.totalDesc}>
        <h4>Total Properties</h4>
        <h3>5,678</h3>
      </div>
      <div  className={styles.totalDesc}>
        <h4>Active Listings</h4>
        <h3>3,456</h3>
      </div>

    </div>
     {/* section 3 */}
    <div className={styles.trends}>
      <h4>Property Trends</h4>
      <div className={styles.chart}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consequatur voluptatibus quasi commodi et qui ullam recusandae 
          illo similique tempora! Quam, repudiandae rerum? Quaerat nobis 
          iusto maxime minus non necessitatibus dolor quas obcaecati, iure modi deserunt? Velit officia quo eaque minima hic est natus tempore, aspernatur fugiat saepe? Vitae ea tenetur sint officia, fuga mollitia velit iusto atque illum nulla. Minus placeat explicabo amet maiores a repellendus cupiditate recusandae quisquam sunt voluptate! Praesentium illum libero totam distinctio dolor explicabo debitis repellendus dolorem! Illo asperiores iusto maiores sed ea similique commodi voluptate ex id ipsum, animi harum est minus iure atque quas voluptatem a doloribus fugit dolores eaque tempora debitis iste! Doloremque quasi aperiam voluptatem minus id in vero similique nesciunt distinctio et ea, voluptatibus quidem deleniti, eveniet, blanditiis provident atque aliquid commodi fugit obcaecati laboriosam. Distinctio esse, facilis assumenda commodi veritatis magnam saepe modi voluptatem neque, nulla provident necessitatibus. Quis optio voluptatum inventore! At, accusantium dolores similique tenetur voluptatem harum quisquam vitae amet praesentium eaque incidunt, reprehenderit blanditiis id dicta ea exercitationem et molestiae magni odio laborum. Fuga distinctio veritatis sunt, ipsam delectus odio voluptas aut eum labore voluptatum dicta iusto esse veniam nam libero minus non fugiat est accusantium sint recusandae? Amet tempore repudiandae quia voluptatem dignissimos natus ut. Illo pariatur error libero sit officiis sapiente quam eveniet. Possimus eligendi doloremque mollitia nam, ea iusto labore animi minus blanditiis ducimus quibusdam corporis saepe id, ab, suscipit assumenda. Quisquam dignissimos commodi dolores? Iure sequi autem atque id delectus rem laudantium odio aspernatur nulla maiores! Facere blanditiis inventore est? Amet, ipsum provident. Deleniti veritatis ad temporibus repellendus repellat. Facilis dolor velit et corporis recusandae impedit voluptatum consectetur facere esse, sit officia labore odio quaerat similique? Itaque enim eos ipsam repellendus praesentium dolorum inventore, modi perferendis natus beatae neque quibusdam nulla quos eum debitis blanditiis saepe deserunt dignissimos libero aliquam porro voluptatem quasi! Voluptatem sequi odit, aperiam quas maiores ex excepturi cum minus repudiandae eum corrupti, qui voluptas fugiat dolorum reiciendis maxime expedita dicta sit esse at eius architecto. Vero, architecto! Libero reprehenderit quas repudiandae laboriosam provident commodi at ex voluptatem, labore nostrum, odio explicabo ipsa nisi aspernatur natus error voluptatibus expedita esse quae ratione repellendus. Vero nemo possimus quaerat corrupti repellat aspernatur, numquam consequuntur illum? Dolor sed, facere voluptate, fuga ea sunt expedita quas, aperiam qui placeat dicta fugiat ducimus reprehenderit obcaecati. Totam doloremque incidunt magnam laboriosam numquam dignissimos maiores est earum.</p>
      </div>
    </div>

    {/* section 4 */}
    {/* <div className={styles.recentActivities}>
    <h4>Property Trends</h4>
    <div className={styles.activitiesTable}>
      <div className={styles.actlivitiesList}>
        <Image src='/newproperty.png' alt='newproperty' width={20} height={20} />
        <p>New property listed: Luxury Villa in Malibu</p>
      </div>
      <div className={styles.actlivitiesList}>
      <Image src='/soldproperty.png' alt='soldproperty' width={20} height={20} />
      <p>New property listed: Luxury Villa in Malibu</p>
      </div>
      <div className={styles.actlivitiesList}>
      <Image src='/newUser.png' alt='newuser' width={20} height={20} />
      <p>New property listed: Luxury Villa in Malibu</p>
      </div>
      <div className={styles.actlivitiesList}>
      <Image src="/updatedproperty.png" alt='newuser' width={20} height={20} />
      <p>New property listed: Luxury Villa in Malibu</p>
      </div>
    </div>
    </div> */}

<div className={styles.recentActivities}>
  <h4>Property Trends</h4>
  <table className={styles.activitiesTable}>
    <tbody>
      <tr className={styles.activitiesList}>
        <td><Image src='/newproperty.png' alt='newproperty' width={20} height={20}   className={styles.icon}/></td>
        <td>New property listed: Luxury Villa in Malibu</td>
      </tr>
      <tr className={styles.activitiesList}>
        <td><Image src='/soldproperty.png' alt='soldproperty' width={20} height={20} /></td>
        <td>New property listed: Luxury Villa in Malibu</td>
      </tr>
      <tr className={styles.activitiesList}>
        <td><Image src='/newUser.png' alt='newuser' width={20} height={20} /></td>
        <td>New property listed: Luxury Villa in Malibu</td>
      </tr>
      <tr className={styles.activitiesList}>
        <td><Image src='/updatedproperty.png' alt='newuser' width={20} height={20} /></td>
        <td>New property listed: Luxury Villa in Malibu</td>
      </tr>
    </tbody>
  </table>
</div>
    </section>
  )
}

export default Adminpage
