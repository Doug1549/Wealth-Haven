<script>
  export default {
    name: 'Home',
    mounted(){

      $(document).ready(function(){
        $(this).scrollTop(0);
      });

      let playBtn = document.querySelector(".play_btn"),
      vid = document.querySelector("video");
      
      playBtn.onclick = () => {
        vid.play() ? playBtn.style.display = 'none' : playBtn.style.display = 'block';
      }

      vid.onclick = () => {
        vid.pause() ? playBtn.style.display = 'none' : playBtn.style.display = 'block';
      }
    }
  }
</script>

<template>
  <!--=============== HOME ===============-->
  <section class="home section">
    <div class="home__container container">
      <div class="home__data">
        <h3 class="home__title">Become a Publisher for</h3>
        <h1 class="home__title">Best-In-Class</h1>
        <h2 class="home__title">Financial Products</h2>
      </div>
      <div class="services__container grid" style="align-items: flex-start; margin: 1rem 0;;">
        <div class="services__data">
          <img src="../assets/img/icon.png" class="services__img" alt="">
          <p class="services__description">
            7% Click to conversion rate
          </p>
        </div>
        <div class="services__data">
          <img src="../assets/img/icon-02.png" class="services__img" alt="">
          <p class="services__description">
            We Are The Advertiser not a network
          </p>
        </div>
        <div class="services__data">
          <img src="../assets/img/icon-03.png" class="services__img" alt="">
          <p class="services__description">
            Payout up to $80 per order
          </p>
        </div>
      </div>
      <div class="btn_wrapper">
        <a href="https://partner.wealthhavenfintech.com/login#affiliateApplication" target="_blank" class="button">Get Started Now</a>
      </div>
    </div>
  </section>
  <section class="product section" id="our-product">
    <div class="product__container container">
      <div class="product__data">
        <!-- <div class="btn_wrapper">
          <a href="https://partner.wealthhavenfintech.com/login#affiliateApplication" target="_blank" class="button">Get Started Now</a>
        </div> -->
        <h2 class="product__title">
          Our Products
        </h2>
        <div class="text_content">
          <p>
            <strong>
              FreeCreditScoreCenter.com
            </strong>
            <br>
            <p>
              Become an affiliate marketer for freecreditscorecenter.com. Our site provides subscriptions to credit scores, reports, alerts, and identity protect. In addition, it has useful tools to enable subscribers to improve their credit score without hiring pricey consultants.
            </p>
            <br>
            <p>
              High credit scores enable people to get loans, jobs, rentals, dates, credit cards, and open many other doors. Virtually all adults have an easier time with a high credit score.
            </p>
            <br> 
            <p>
              We offer a credit score and report service that is the gold standard of credit score sites. In addition, we have a best-in-class identity protect service. And further, our credit score building tools make it easy for our subscribers to get the credit score of their dreams; and all of this without hiring an expensive credit repair service.
            </p>
            <br>
            <p>
              Our Market is the USA. 
            </p>
            <br>
            <p>
              <span>
                Our offer is $1.00 for a seven-day trial and $39.90 per month thereafter.
              </span>
            </p>
            <br>
            <p>Watch the video below to view the complete package.</p>
            <br>
            <div class="video_box_wrapper">
              <div class="video_box">
                <div class="play_btn">
                  <img src="../assets/img/Play-icon.png" alt="">
                </div>
                <video width="320" height="240" poster="../assets/img/video_thumbnail.png" id="video">
                  <source src="../assets/img/video/landing-page-intro-square-aspect.mp4" type="video/mp4">
                  <!-- <source src="movie.ogg" type="video/ogg"> -->
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <p>
              <strong>PrimeIdentityProtect.com </strong>
            </p>
            <br>
            <p>
              Become an affiliate marketer for PrimeIdentityProtect.com. Our site provides subscriptions to a best-in-class identity protect program. Key elements include:
              <ol>
                <li>Dark web searches for personal information.</li>
                <li>Loss prevention backed by up to $1 million insurance</li>
                <li>Military grade password encryption</li>
                <li>Identity restoration services</li>
              </ol> 
            </p>
            <br>
            <p>
              Our Market is the USA. 
            </p>
            <br>
            <p>
              <span>
                Our offer is $1.00 for a seven-day trial and $39.90 per month thereafter.
              </span>
            </p>
          </p>
        </div>
        <!-- <div class="video_box_wrapper">
          <div class="video_box">
            <div class="play_btn">
              <img src="../assets/img/Play-icon.png" alt="">
            </div>
            <video width="320" height="240" poster="../assets/img/video_thumbnail.png" id="video">
              <source src="../assets/img/video/landing-page-intro-square-aspect.mp4" type="video/mp4">
              <source src="movie.ogg" type="video/ogg">
              Your browser does not support the video tag.
            </video>
          </div>
        </div> -->
        <br>
        <br>
        <br>
        <div class="btn_wrapper">
          <a href="https://partner.wealthhavenfintech.com/login#affiliateApplication" target="_blank" class="button">Get Started Now</a>
        </div>
      </div>
    </div>
  </section>
  <section class="commissions section" id="our-commissions">
    <div class="commissions__container container">
      <div class="commissions__data">
        <h2 class="commissions__title">
          Our Commissions
        </h2>
        <div class="text_content">
          <p>
            Our commission ranges from $80 to $10 per enrollee for the $1.00 trial. It will depend on the rebill rate for our day seven conversion. If your initial orders generate high rebill rates you will receive commissions on the higher end of our payment scale. 
          </p>
          <br>
          <p>
            We use Hitpath as an independent third-party
            tracking tool to provide you transparency with orders and rebills. Affiliates will
            have their personal log in to a Hitpath portal and be able to reconcile
            our commissions. Payments for a given week of orders occur two weeks
            after the orders.
          </p>
          <br>
          <p>
            We will supply you with a tracking link that will link to our
            landing page and simultaneously track your orders. You will place this
            tracking link as the destination URL for your creatives or referrals.
            Our Commission rate with respect to the rebill rate is described in our
            agreement. Click “<a href="https://partner.wealthhavenfintech.com/login#affiliateApplication" target="_blank">Get Started Now</a>” button to complete your application
            and see our agreement.
          </p>
          <br>
          <p>
            Please contact us any time with questions.
          </p>
          <p>Just click the <router-link :to="{ name: 'CONTACT' }">Contact Us</router-link> page above to reach us.</p>
          <br>
          <br>
          <br>
        </div>
      </div>
    </div>
  </section>
  <section class="resources section">
    <div class="resources_container container">
      <div class="resources_data">
        <h2 class="product__title">
          Resources We Provide You
        </h2>
        <div class="text_content">
          <p>
            We provide you with a wide selection of Emails and banners. Plus, we have a blog
            and a video. We have suggested content for Push and SMS marketing. You will be free
            to use them. Or you can make your own creatives. <router-link :to="{ name: 'CREATIVE' }">Click Here</router-link>
          </p>
          <br>
          <p>
            Affiliates have earned up to $10k a week marketing our products.
          </p>
        </div>
        <div class="btn_wrapper">
          <a href="https://partner.wealthhavenfintech.com/login#affiliateApplication" target="_blank" class="button">Get Started Now</a>
        </div>
      </div>
    </div> 
  </section>
  <section class="about section">
    <div class="about_container container">
      <div class="about__data">
        <h2 class="about__title">
          About Us
        </h2>
        <div class="text_content">
          <p>
            <strong>Dear Honorable Affiliate</strong>
            <p>
              We would love to have you on our team. Our payouts are the highest in the industry and our click to conversion rate at 7% is outstanding. We expect and desire to 
              amply reward you for marketing our products. Some partners have made over 
              $10K per week. We have been in existence since 2019 and have paid our affiliates 
              over $3 million in commissions.
            </p>
            <p>
              We provide affordable financial services to people without expertise in money 
              matters. We are run by a team of business and affiliate marketing experts that 
              reside worldwide.
            </p>
            <p>
              Our support is always available to you. And you can contact me personally anytime. 
              We would love to hear from you anytime about anything.
            </p>
            <p>Let's make money together!</p>
            <p>All the Best,</p>
            <p>Doug Vaughan, CEO</p>
            <p>Wealth Haven, Inc.</p>
            <p>Phone: <a href="tel:(877) 434-1255">(877) 434-1255</a></p>
            <p>Email: <a href="mailto:contact@WealthHaven.Partners">contact@WealthHaven.Partners</a></p>
            <br>
          </p>
        </div>
      </div>
    </div> 
  </section>
  <section class="signUp section">
    <div class="signUp__container container">
      <div class="signUp__data">
        <h2 class="product__title">
          Our Sign Up Process
        </h2>
        <div class="text_content">
          <p>
            Our enrollment process is quick and easy. Just click <a href="https://partner.wealthhavenfintech.com/login#affiliateApplication" target="_blank">Get Started Now</a>
            and you are on your way. Here is what to expect:
            <ul>
              <li>
                <a href="https://partner.wealthhavenfintech.com/login#affiliateApplication" target="_blank">Click Here</a> to get started or click “Get Started Now.” You will then be
                directed to our sign up form. Then complete the form.
              </li>
              <li>You will choose your log in credentials while completing the form.</li>
              <li>
                Read and approve the agreement that will be made available to you when
                you complete the application. <router-link :to="{ name: 'CONTACT' }">Contact us</router-link> with any questions or issues.
              </li>
              <li>We will review and in all likelihood accept your application.</li>
              <li>
                We notify you via Email that you are approved and subsequently, provide
                login credentials.
              </li>
              <li>You log in to your dashboard.</li>
              <li>You then can pull a tracking link that you will use with your creatives.</li>
              <li>It directs your users to our sites and tracks your orders.</li>
              <li>
                In your dashboard, you can pull any of our creatives and use them for
                your marketing, including Emails, banners, blog, and video.
              </li>
              <li>
                If you are an Email marketer, you scrub your list against our supression
                file prior to bulk mailings.
              </li>
              <li>You track results in the HitPath dashboard</li>
              <li>We pay you for your orders.</li>
              <li>We are here to answer any questions you may have.</li>
            </ul>
          </p>
          <div class="btn_wrapper">
            <a href="https://partner.wealthhavenfintech.com/login#affiliateApplication" target="_blank" class="button">Get Started Now</a>
          </div>
        </div>
      </div>
    </div>
  </section> 
</template>
