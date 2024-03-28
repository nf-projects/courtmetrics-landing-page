import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180"
                      href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32"
                      href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16"
                      href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>

                {/*clarity session analytics*/}
                <script type="text/javascript" dangerouslySetInnerHTML={{
                    __html: `
                    (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "fzjffee4bd");
                `
                }}></script>

                {/*crisp customer chat*/}
                <script type="text/javascript" dangerouslySetInnerHTML={{
                    __html: `
                    window.$crisp=[];window.CRISP_WEBSITE_ID="8429e8b2-8afe-4b7f-843a-b5aacd8a0a7d";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
                `
                }}></script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
