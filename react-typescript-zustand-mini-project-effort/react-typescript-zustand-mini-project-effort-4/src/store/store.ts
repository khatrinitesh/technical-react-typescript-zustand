import { create } from "zustand";

type NewsArticle = {
  date: string;
  headLine: string;
  subHeadline: string;
  newsLink: string;
  headlineImage: string;
};

type NewsStore = {
    news:NewsArticle[];
    loading:boolean;
    error:string | null;
    fetchNews:() => void;
}

const useNewsStore = create<NewsStore>((set) => ({
    news:[],
    loading:false,
    error:null,
    fetchNews:async () => {
        set({
            loading:true,
            error:null
        });
        const myHeaders = new Headers();
        myHeaders.append("x-apihub-key", "v-Hbbx2677IGspXPbuXRJ1JNEfhDKpoKcPd0nEyK0yowzVF6i5");
        myHeaders.append("x-apihub-host", "Business-News-Daily.allthingsdev.co");
        myHeaders.append("x-apihub-endpoint", "2a95520f-14a3-47ec-a91d-3449d76b9016");
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow" as RequestRedirect,
        };
        try{
            const response = await fetch('https://Business-News-Daily.proxy-production.allthingsdev.co/api/news',requestOptions);
            if(!response.ok){
                throw new Error('failed to fetch news')
            }
            const data = await response.json();
            set({
                news:result,
                loading:false
            });
        }
        catch(error:any){
            set({error:error.message || 'An unknown error occurred',loading:false})
        }
    }
}));

export default useNewsStore;
