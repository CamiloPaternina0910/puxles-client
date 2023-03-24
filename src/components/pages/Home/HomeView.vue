<script>
import HeaderComponent from "@/components/HeaderComponent.vue"
import TableComponent from "@/components/TableComponent.vue";
import productService from "@/services/product";
import PaginatorComponet from "@/components/PaginatorComponet.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        TableComponent,
        PaginatorComponet,
        FooterComponent
    },
    data: () => ({
        products: [],
        totalPages: 0,
        totalElements: 0,
        currencyPage: 0,
        nameProduct: "",
        headerTable: ["productId", "Product Name", "Product Price", "Product Stock", "Delete"]
    }),
    created() {
        let page = this.$route.params.page
        let elements = this.$route.params.elements
        let name = this.$route.params.name
        if (page && elements) {
            this.getProducts(page, elements);
        } else if (name){
            this.searchProductoByName(name);
        }
        else {
            this.getProducts(1, 10);
        }
    },
    methods: {
        async getProducts(page, elements) {
            const { data, currencyPage, totalElements, totalPages } = await productService.getAllProducts(page, elements);
            this.products = data;
            this.currencyPage = currencyPage;
            this.totalElements = totalElements;
            this.totalPages = totalPages;
        },

        async search(name){
            this.$router.push({
                name:'homeWihtParamsName',
                params: {name}
            });
        },

        async searchProductoByName(name){
            const { data, currencyPage, totalElements, totalPages } = await productService.getProductsByName(name+ " ");
            this.products = data
            this.currencyPage = currencyPage;
            this.totalElements = totalElements;
            this.totalPages = totalPages;
        }
    }
}
</script>

<template>
    <div class="container-fluid m-0 p-0">
        <div class="row">
            <HeaderComponent :isHome="true"></HeaderComponent>
        </div>

        <div class="container mt-5">
            <div class="row justify-content-between">
                <h2 style="font-size: 35px;" class="col-3">Products</h2>

                    <div class="my-2 my-lg-0 col-5 row align-items-center">
                        <input v-model="nameProduct" class="rounded col-8 search m-2" type="search" placeholder="Search" aria-label="Search">
                        <button @click="searchProductoByName(nameProduct)" class="btn btn-outline-primary col-3">Search</button>
                    </div>
                
            </div>

            <hr class="mt-0 pb-0">
            <div v-if="products">
                <TableComponent :headers="headerTable" :values="products" class="mt-3"></TableComponent>
                <PaginatorComponet :currentPage="currencyPage"
                    :lastPage="(currencyPage + 1 - totalPages) == 0 ? true : false">
                </PaginatorComponet>
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<style scoped>
.search{
    height: 37px;
    border-color: gray;
}

.search:focus{
    border-color: blue;
}
</style>
