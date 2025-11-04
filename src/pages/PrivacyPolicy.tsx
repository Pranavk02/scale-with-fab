import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">
            This privacy policy ("policy") will help you understand how Fab Accounts ("us", "we", "our") uses and protects the data you provide to us when you visit and use https://fabaccounts.ai/ ("website", "service").
          </p>
          
          <p className="text-muted-foreground">
            We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">1. What User Data We Collect</h2>
            <p className="text-muted-foreground mb-4">
              When you visit the website, search, read and view content through the platform, and/or communicate with us through our contact information or our contact forms, we may collect the following data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your contact information, names and email address.</li>
              <li>Data profile regarding your online behavior on our website.</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Company name and registration number;</li>
              <li>Zip/postal code</li>
              <li>Any additional information relating to you that you provide to us directly or indirectly through our platform.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Fab Accounts will not collect any personally identifiable information about you, unless you provide it.
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Information Collected Automatically:</h3>
            <p className="text-muted-foreground mb-4">
              By accessing and using the platform you automatically provide us with the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>The device and usage information you use to access the platform</li>
              <li>Your IP address</li>
              <li>Browser and device characteristics</li>
              <li>Operating system</li>
              <li>Referring URLs</li>
              <li>Your location</li>
              <li>What parts of the platform you use and how often</li>
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Information collected from the device you are using:</h3>
            <p className="text-muted-foreground mb-4">
              By using the platform through a mobile device, we may request permission to use certain features of the device and collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Mobile device ID</li>
              <li>Model and manufacturer</li>
              <li>Operating system</li>
              <li>Version information</li>
              <li>IP address</li>
              <li>Access to notifications</li>
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Credit/debit card details collection:</h3>
            <p className="text-muted-foreground">
              Your credit/debit card details or payment information will be processed by the payment processors available on the platform (Stripe), which will process and store your data securely and for the sole purpose of processing transactions within the platform. See Stripe's privacy policy here: <a href="https://stripe.com/gb/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://stripe.com/gb/privacy</a>
            </p>
            <p className="text-muted-foreground mt-4">
              Fab Accounts reserves the right to contract any payment platform available on the market, which processes your data for the sole purpose of processing transactions within the platform.
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Google Analytics</h3>
            <p className="text-muted-foreground">
              We use Google Analytics provided by Google, Inc., USA ("Google"). These tools and technologies collect and analyze certain types of information, including IP addresses, device and software identifiers, referring and exit URLs, feature use metrics and statistics, usage and purchase history, media access control address (MAC Address), mobile unique device identifiers, and other similar information via the use of cookies. The information generated by Google Analytics (including your IP address) may be transmitted to and stored by Google on servers in the United States. We use the GOOGLE Analytics collection of data to enhance the platform and improve our service. Please consult Google's privacy policy here: <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Facebook Pixel</h3>
            <p className="text-muted-foreground mb-4">
              Our platform uses the Facebook Pixel. Through the Facebook Pixel we can collect user information for different purposes. We use the Facebook Pixel for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>collect statistics about our platform (for example, the number of users who visited a page);</li>
              <li>collect information about how you interact with our platform (for example, whether you opened or followed links contained in them);</li>
              <li>personalize online services and marketing communications;</li>
              <li>tailor advertisements to users and optimize advertising campaigns.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              The information collected through the Facebook Pixel will be collected and stored by Facebook and will be treated in accordance with its privacy policy. The information we collect through the Facebook Pixel does not personally identify the user and will never be used for purposes other than those contained in this privacy policy and Facebook's privacy policy.
            </p>
            <p className="text-muted-foreground mt-4">
              Please consult Facebook's privacy policy here: <a href="https://www.facebook.com/privacy/explanation" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy/explanation</a>
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Social Media</h3>
            <p className="text-muted-foreground mb-4">
              On our platform you will find links and functions linked to different social media, where you can share your information or our content.
            </p>
            <p className="text-muted-foreground mb-4">
              It is advisable to consult the privacy policy and data protection of each social media used on our platform.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Facebook: <a href="https://www.facebook.com/privacy/explanation" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy/explanation</a></li>
              <li>Instagram: <a href="http://instagram.com/about/legal/privacy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">http://instagram.com/about/legal/privacy/</a></li>
              <li>Twitter: <a href="https://twitter.com/en/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://twitter.com/en/privacy</a></li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">2. Why We Collect Your Data</h2>
            <p className="text-muted-foreground mb-4">
              We are collecting your data for several reasons:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To better understand your needs.</li>
              <li>To improve our services and products.</li>
              <li>To send you promotional emails containing the information we think you will find interesting.</li>
              <li>To contact you to fill out surveys and participate in other types of market research.</li>
              <li>To customize our website according to your online behavior and personal preferences.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">3. Safeguarding and Securing the Data</h2>
            <p className="text-muted-foreground">
              Fab Accounts is committed to securing your data and keeping it confidential. Fab Accounts has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">4. Sharing information policy:</h2>
            <p className="text-muted-foreground mb-4">
              The personal information of our users is an important and fundamental part of our business. Under no circumstances will we sell or share information with third parties that has not been previously authorized by the user or owner of the personal data. We share user information solely and exclusively as described below.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Third-Party Service Providers</h3>
            <p className="text-muted-foreground mb-4">
              We use third party services to perform certain services, as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Payment processing (Stripe)</li>
              <li>Data analysis (Google Analytics)</li>
              <li>Creation of ads (Facebook, Google, TikTok, Snapchat, etc.)</li>
              <li>Providing support services (Slack, Skype, WhatsApp or Telegram)</li>
              <li>Marketing services</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              These third-party services and tools may have access to personal information needed to perform their functions, but may not use that information for other purposes. Information shared with these third-party services will be treated and stored in accordance with their respective privacy policies and our privacy policy.
            </p>
            <p className="text-muted-foreground mt-4">
              Fab Accounts may release personal information when we are obliged to do so in order to comply with the applicable law, enforce or apply the agreements we sign with our clients, or protect the rights, property, or safety of Fab Accounts, our users or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.
            </p>
            <p className="text-muted-foreground mt-4">
              Except the above mentioned cases, Fab Accounts may release personal information upon your explicit consent. Fab Accounts will not lease, sell or distribute your personal information to any third parties, unless we have your permission. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">5. Our Cookie Policy:</h2>
            <p className="text-muted-foreground mb-4">
              By using the website, you accept the use of cookies and you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you visit and spend the most time on). The data we collect by using cookies is used to customize our website to your needs.
            </p>
            <p className="text-muted-foreground mb-4">
              After we use the data for statistical analysis, the data is completely removed from our systems.
            </p>
            <p className="text-muted-foreground mb-4">
              Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you.
            </p>
            <p className="text-muted-foreground">
              If you want to disable cookies, you can do it by accessing the settings of your internet browser. You can visit <a href="https://www.internetcookies.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.internetcookies.com</a>, which contains comprehensive information on how to do this on a wide variety of browsers and devices.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">6. Links to Other Websites</h2>
            <p className="text-muted-foreground">
              Our website contains links that lead to other websites. If you click on these links Fab Accounts shall not be held responsible for your data and privacy protection. Visiting those websites is not governed by this privacy policy agreement. Make sure to read the privacy policy documentation of the website you go to from our website.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">7. Restricting the Collection of your Personal Data</h2>
            <p className="text-muted-foreground mb-4">
              At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following:
            </p>
            <p className="text-muted-foreground mb-4">
              When you are filling the forms on the website, make sure to check if there is a box which you can leave unchecked, if you don't want to disclose your personal information.
            </p>
            <p className="text-muted-foreground">
              If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights Under GDPR and CCPA</h2>
            <p className="text-muted-foreground mb-4">
              If you are a resident of the European Economic Area (EEA) or California, you have certain data protection rights. Subject to applicable law, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict certain types of processing</li>
              <li>Request a copy of your data in a portable format</li>
              <li>Withdraw your consent at any time, where applicable</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We will respond to your request in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">9. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain personal data only for as long as necessary to fulfill the purposes described in this privacy policy, including legal, accounting, or reporting obligations. When your data is no longer required, we securely delete or anonymize it.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
            <p className="text-muted-foreground mb-4">
              As part of the services we offer, the information you provide may be transferred to and processed in countries outside of your jurisdiction, including the United States. These countries may not have the same level of data protection laws as your own.
            </p>
            <p className="text-muted-foreground">
              Where applicable, we rely on appropriate safeguards such as Standard Contractual Clauses approved by the European Commission to ensure your data is protected.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">11. Cookie Consent and Management</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar tracking technologies to enhance user experience, analyze traffic, and serve personalized content and ads.
            </p>
            <p className="text-muted-foreground mb-4">
              By continuing to use our website, you consent to the use of cookies. If you are located in a region where consent is required (e.g. the EU), you will be presented with a cookie banner allowing you to accept or manage your preferences.
            </p>
            <p className="text-muted-foreground">
              You can modify your cookie settings at any time through your browser, or by revisiting our cookie preferences banner if available.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
