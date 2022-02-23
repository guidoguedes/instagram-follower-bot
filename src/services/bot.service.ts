import { IgApiClient, MediaRepositoryLikersResponseUsersItem } from 'instagram-private-api';
import { config } from 'dotenv';
export default class BotService {
    ig: IgApiClient;
    user: string;
    password: string;
    accountToParse: string = 'theuniversalart';
    usersToFollow: MediaRepositoryLikersResponseUsersItem[];
    constructor() {
        config();
        this.user = process.env.USER;
        this.password = process.env.PASS;
        this.ig = new IgApiClient();
    }

    async login() {
        this.ig.state.generateDevice(this.user);
        // await this.ig.simulate.preLoginFlow(); generating 429 error too many redirects
        const loggedInAccount = await this.ig.account.login(this.user, this.password);
        // await this.ig.simulate.postLoginFlow(); generating 429 error too many redirects
        // TODO send loggedInAccount data to index.ejs
        // document.getElementById("ig_title").innerHTML = `logged user: ${JSON.stringify(loggedInAccount)} :)`;
        // document.getElementById("ig_content").innerHTML = JSON.stringify(loggedInAccount);
    }
}