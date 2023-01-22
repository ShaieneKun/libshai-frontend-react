import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleIndex from './index';
import ArticleDetail from './article';
import Layout from './layout';


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Layout>
                        <Routes>
                            <Route index element={< ArticleIndex />} />
                            <Route path="blog" element={< ArticleDetail />} />
                        </Routes>
                    </Layout>
                }>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}