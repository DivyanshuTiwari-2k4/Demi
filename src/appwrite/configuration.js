import connect from "@/connect/connect";
import { Client,ID,Databases,Storage,Query } from "appwrite";
export class AppService{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint()
        .setProject()
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }
    // create methods
}
const appService=new AppService()
export default appService;