        // "config" object contains default widget configuration
        // with any custom overrides defined in your admin settings.
        var head = document.head;
        var link = document.createElement('link');
      
        link.type = 'text/css';
        link.rel = 'stylesheet';
        var config = OktaUtil.getSignInWidgetConfig();
		var clientId = getClientId();
        // Render the Okta Sign-In Widget
	    if (clientId === '0oafq9xkqRivjq2464x6'){
         
          link.href = 'https://my-website-aws.s3.amazonaws.com/css/0oafq9xkqRivjq2464x6.css';
          head.appendChild(link);
		  config.logo = "https://studiocollection.ironmaiden.com/img/logo.png";
          config.colors = { brand: '#87ceeb' };
          config.helpLinks.custom = [
                            {
                              text: 'Privacy Policy',
                              href: 'https://www.ironmaiden.com/legal/privacy-policy/'
                            },
                            {
                              text: 'FAQ',
                              href: 'https://www.ironmaiden.com/legal/privacy-policy/'
                            },
          ]
        } 
	    else if (clientId === '0oafq7wdpTdiVZHvc4x6'){
         
          link.href = 'https://my-website-aws.s3.amazonaws.com/css/0oafq7wdpTdiVZHvc4x6.css';
          head.appendChild(link);
          config.colors = { brand: '#778899' };
		  config.logo = "https://logodix.com/logo/36577.jpg"
        }
		else if(clientId === '0oa1j9ulz38c8apFR4x7'){
            link.href = 'https://my-website-aws.s3.amazonaws.com/css/default.css';
        	head.appendChild(link);
            config.colors = { brand: '#008000' };
 
            config.logo = "https://whatsthatfont.files.wordpress.com/2012/09/led-zeppelin-bowlby-one.png";
            config.helpLinks.custom = [
                            {
                              text: 'FAQs',
                              href: 'https://www.billboard.com/p/frequently-asked-questions'
                            }]
            config.language = 'en';
            config.customButtons = [{
              title: 'Login with Google',
              className: 'btn-customAuth',
              click: function() {
                // clicking on the button navigates to another page
                window.location.href = 'http://www.example.com';
              }
            }];
        
        }
		else {
            link.href = 'https://my-website-aws.s3.amazonaws.com/css/default.css';
        	head.appendChild(link);
            config.colors = { brand: '#008000' };
            config.features.passwordlessAuth = true;
            config.logo = "https://i.pinimg.com/originals/95/b3/e1/95b3e17356f0fbf21ba964bd82f9b5b9.png";
            config.helpLinks.custom = [
                            {
                              text: 'FAQs',
                              href: 'https://www.billboard.com/p/frequently-asked-questions'
                            }]
            config.language = 'en';
            config.customButtons = [{
              title: 'Login with Google',
              className: 'btn-customAuth',
              click: function() {
                // clicking on the button navigates to another page
                window.location.href = 'http://www.example.com';
              }
            }];
        
        }
