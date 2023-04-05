<script>
import HeaderComponent from "@/components/HeaderComponent.vue"
import nofify from "@/components/Notify"
import productService from "@/services/product";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: 'CreateView',
    components: {
        HeaderComponent,
        FooterComponent
    },
    data: () => ({
        nameProduct: "",
        stockProduct: 0,
        priceProduct: 0,
    }),
    methods: {
        checkProduct: (name, price, stock) => {
            let err = false;
            if (new String(name).trim().length == 0 || name == null) {
                nofify.notifyError("Product name is required");
                err = true;
            }
            if (price == null || new String(price).trim().length == 0) {
                nofify.notifyError("Price is required");
                err = true;
            }

            if (stock == null || new String(stock).trim().length == 0) {
                nofify.notifyError("Stock is required");
                err = true;
            }

            if (!err) {
                productService.createProduct(name, price, stock);
                nofify.notifySuccess("Product created");
            }
        }
    }
}

</script>

<template>
    <div class="container-fluid m-0 p-0">
        <div class="row">
            <HeaderComponent :isCreate="true"></HeaderComponent>
        </div>

        <div class="container">

            <div class="row justify-content-center">

                <div class="mt-4 border col-12 col-lg-6 p-3 row justify-content-center shadow">

                    <h3 class="col-10">Create a product</h3>
                    <p class="col-10">Puxles form to add new products to the database</p>
                    <label for="name" class="col-10">Name</label>
                    <input type="text" v-model="nameProduct" class="col-10 rounded mb-2">
                    <label for="price" class="col-10">Price</label>
                    <input type="number" v-model="priceProduct" class="col-10 rounded mb-2">
                    <label for="stock" class="col-10">Stock</label>
                    <input type="number" v-model="stockProduct" class="col-10 rounded mb-2">

                    <button @click="checkProduct(nameProduct, priceProduct, stockProduct)" class="btn btn-primary col-3 mt-3">Create</button>
                </div>
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<style scoped>
label {
    font-size: 20px;
}
</style>