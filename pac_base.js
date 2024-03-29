var V2Ray = "SOCKS5 127.0.0.1:1081; SOCKS 127.0.0.1:1081; DIRECT;";

var domains = [
	"jetbrains.com",
	"dw.com",
	"atlassian.com",
	"clicktale.net",
	"mysql.com",
	"gitbooks.io",
	"rethinkphp.com",
	"dropboxusercontent.com",
	"amazonaws.com",
	"tensorflow.org",
	"charliemonroe.net",
	"keyboardmaestro.com",
	"spring.io",
	"docker.com",
	"firebaseio.com",
	"lithium.com",
	"zdassets.com",
	"xysblogs.org",
	"xys.org",
	"apkpure.com",
	"winudf.com",
	"wolves.fm",
	"tvcdn.de",
	"kotlinlang.org",
	"caddyserver.com",
	"styleguides.io",
	"adminlte.io",
	"almsaeedstudio.com",
	"speckyboy.com",
	"godoc.org",
	"swagger.io",
	"kaggle.com",
	"elastic.co",
	"android.com",
	"ftchinese.com",
	"phaser.io",
	"pixijs.io",
	"code.jquery.com",
	"fonts.gstatic.com",
	"cdn.rawgit.com",
	".googleblog.com ",
	"google.com",
	"domains.google",
	"doubleclick.net",
	"namesilo.com",
	"t.me",
	"git.apache.org",
	"macrumors.com",
	"vetoo.me",
	"ytimg.com",
	"audiencemanager.de",
	"spring.io",
	
	// github
	"github.io",
	"api.github.com",
	"codeload.github.com",
	"github.com",

	// slack
	"slack.com",
	"slack-edge.com",
	
	// reddit
	"reddit.com",
	"redditmedia.com",

	// quora
	"quora.com",
	"quoracdn.net",

	// pinterest
	"pinterest.com",
	"pinimg.com",

	// 18+
	"t66y.com",
	"pornhub.com",
	"sex.com",
	"redtube.com",
	"xvideos.com",
	"drtuber.com",

	"vpngate.net",
	"greatfire.org",
	"tox.im",
	"proxifier.com",
	"dnscrypt.org",
	"atgfw.org",
	"chinagfw.org",
	"whatismyip.com",
	"goagentplus.com",
	"shadowsocks.org",
	"falcop.com",
	"getlantern.org",
	"furbo.org",
	"goagentx.com",
	"sourceforge.net",
	"torproject.org",
	"hideme.io",
	"mozilla.org",
	"shadowx.work",
	"v2ray.com",
	"astrill.com",

	//Design
	"deviantart.com",

	"disqus.com",
	"disquscdn.com",
	"tumblr.com", 
	"flickr.com",
	"imgur.com",

	"evozi.com",
	"live.com",
	"1drv.com",
	"evernote.com",

	//blog
	"wp.com",
	"yam.com",
	"ashchan.com",
	"zuckclub.com",
	"blogspot.com",
	"blogspot.jp",
	"zalex2014.tk",
	"coreygilmore.com",
	"wordpress.com",
	"blogimg.jp",
	"leaskh.com",
	"blogger.com",
	"hexo.io",
	"medium.com",

	//GeneralNews
	"rfi.my",
	"rfi.fr",
	"washingtonpost.com",
	"tmagazine.com",
	"nytimes.com",
	"nytimg.com",
	"imrworldwide.com",
	"rankingsandreviews.com",
	"usnews.com",
	"bbc.co.uk",
	"bbci.co.uk",
	"bbc.com",
	"on-match.com",
	"solidot.org",

	//TechNews
	"engadget.com", 

	//Network
	"amazonaws.com",
	"fastly.net",
	"akamaihd.net", 
	"blogsmithmedia.com", 
	"bit.ly",
	"d.pr",
	"ow.ly",
	"ift.tt",

	"nateparrott.com",
	
	"stacksocial.com",
	"feedly.com",
	"acgtea.com",

	//academy and develop
	"ieee.org",
	"mathoverflow.net",
	"tex.stackexchange.com",
	"academia.edu",
	"geogebra.org",
	"golang.org",
	"netspeak.org",
	"endreslab.com",

	//Universities
	"illinois.edu",
	"berkeley.edu",
	"wisc.edu",
	"cmu.edu",
	"rochester.edu",
	"purdue.edu",
	"technolutions.net",

	"netflix.com",

	//Online Dictionary
	"ldoceonline.com",
	"freedicts.com",

	//Softwares
	"formacx.com",
	"trionworlds.com",
	"line.me",

	//otaku
	"e-hentai.org",
	"nhentai.net",
	"nicovideo.jp",
	"nimg.jp",
	"pixnet.net",
	"fc2.com",
	"nyaatorrents.org",
	"nyaa.se",
	"share.dmhy.org",
	"loli.us",

	//facebook
	"facebook.net",
	"instagram.com",
	"facebook.com",
	"fb.me", 
	"fb.com",
	"cdninstagram.com",
	"fbcdn.net", 

	"booth.pm",

	"telegram.org",
	"telegram.me",

	"wikipedia.org",
	"pixiv.net",
	"twitch.tv",

	//Twitter
	"twitter.com",  
	"t.co", 
	"twimg.com",

	//Google
	"gmail.com", 
	"imap.gmail.com",
	"googlemail.com",
	"mailchimp.com", 
	"mail-archive.com", 
	"google.com", 
	"goo.gl",
	"google.com.hk", 
	"google.com.tw", 
	"google.co.jp",
	"googlecode.com",
	"googleapis.com", 
	"ggpht.com",
	"youtube.com", 
	"youtu.be",
	"ytimg.com",
	"youtube-nocookie.com",
	"googlevideo.com",
	"sketchup.com",
	"gstatic.com",
	"google-analytics.com",
	"googleusercontent.com",
	"chrome.com", 
	"g.co", 
	"googledrive.com", 
	"googletagmanager.com", 
	"googleadservices.com",
	"abc.xyz",

	//Dropbox
	"dropbox.com",
	"dropboxusercontent.com",
	"dropboxwiki.com",

	//iTuens
	"mzstatic.com",
	// "itunes.apple.com",

	//cdn
	"cloudfront.net",
	"colwiz.com"
];

function FindProxyForURL(url, host) {
    for (var i = domains.length - 1; i >= 0; i--) {
    	if (dnsDomainIs(host, domains[i])) {
            return V2Ray;
    	}
    }
    return "DIRECT";
}
