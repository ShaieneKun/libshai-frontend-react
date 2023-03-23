export type articleJson = {
    id: number,
    title: string,
    summary: string,
    body: string,
    date_of_creation: string,
    date_of_last_update: string,
    author: number,
    tags: number[],
}

export type ArticleArrayJson = articleJson[]

export class ArticleAPI{
    static async getArticleList(success: Function) {
        try {
            const response: Response = await fetch("http://localhost:8000/blog/api/");
            const responseJson: ArticleArrayJson = await response.json();

            success(responseJson)
        } catch (error) {
            console.log(error);
        }
    }

    static async getArticle(success: Function, id: number) {
        try {
            const response: Response = await fetch(`http://localhost:8000/blog/api/${id}`);
            const responseJson: ArticleArrayJson = await response.json();

            success(responseJson)
        } catch (error) {
            console.log(error);
        }
    }
}
