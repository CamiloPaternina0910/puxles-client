import { puxlesApi } from "../../common/api";

const productService = {

    createProduct: async (name, price, stock) => {
        await puxlesApi.post("product/new",{
            name, 
            price,
            stock
        });
    },
    
    getAllProducts: async (page, elements) => {
        const res = await puxlesApi.get(`product/all?page=${page}&elements=${elements}`);
        return {
            data: res.data.data.content,
            currencyPage: res.data.data.pageable.pageNumber,
            totalPages: res.data.data.totalPages,
            totalElements: res.data.data.totalElements
        }
    },
    
    getProductById: async (id) => {
        const data = await puxlesApi.get(`product/${id}`);
        return data;
    },
    
    getProductsByName: async (name) => {
        const res = await puxlesApi.get(`product/filter/by/name?name=${name}`);
        return {
            data: res.data.data,
        }
    } ,  

    getProductByPrices: async (price1 , price2) => {
        const data = await puxlesApi.get(`product/filter/by/price`, {
            price1,
            price2
        });
        return data;
    },

    deleteProduct: async(id) => {
        await puxlesApi.post(`product/delete/${id}`)
    }
}

export default productService;