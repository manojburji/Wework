import { byText, byTooltip, byType, byValueKey } from "appium-flutter-finder";
import { strict as assert } from 'assert'
class WeMovies {

    public async Wemovies1() {
        const search = byText('Search Movies by name')
        await driver.elementClick(search);
    }

    public async WemoviesSuccess(message?: string): Promise<void> {
        await driver.execute('flutter:waitForTappable', byText('We Movies'))
        const element = await driver.getElementText(byText('We Movies'))
        console.log('element value is:' + element)
        const valuee = 'We Movies'
        assert.strictEqual(element, valuee)
    }

    public async NowPlaying() {
        const nowplaying = byText('NOW PLAYING')
        await driver.elementClick(nowplaying);

        await driver.execute('flutter:scroll', byText('Smile 2'), { dx: -10, dy: 0, durationMilliseconds: 10000, frequency: 80 })
    }

    public async TopRated() {
        const TopRated = byText('TOP RATED')
        await driver.elementClick(TopRated);
    }

    public async Explore() {
        const tap = byText('Explore')
        await driver.elementClick(tap);
    }

    public async Upcoming() {
        const tap1 = byText('Upcoming')
        await driver.elementClick(tap1);
    }

    public async Wemovies() {
        const click = byText('We Movies')
        await driver.elementClick(click);
    }

}

export default new WeMovies();
