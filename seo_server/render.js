const puppeteer = require('puppeteer');
module.exports = {
    getRenderedDomTree : async (url) => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitFor(1000);
        //await page.screenshot({path: 'example.png'});
        let domTree = await page.$eval('html', (el) => {
            return el.outerHTML;
        });
        console.log(domTree);
        await browser.close();
        return domTree;
    }
}
