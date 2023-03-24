<script>
import { Peso } from '@/utils/refactorPrice';
import productService from '@/services/product';

export default {
    name: 'TableComponent',
    props: {
        headers: [],
        values: []
    },
    methods: {
        getFormatPrice(price) {
            return Peso(price);
        },
        async deleteProduct(productId) {
            await productService.deleteProduct(productId);
            window.location.reload();
        }
    }
}
</script>


<template>
    <table class="table table-dark table-striped rounded shadow text-center">
        <thead>
            <tr>
                <th v-for="(head, index) in headers" :key="index" class="col">{{ head }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value) in values" :key="value.productId">
                <th scope="row">{{ value.productId }}</th>
                <td>{{ value.name }}</td>
                <td>{{ getFormatPrice(value.price) }}</td>
                <td>{{ value.stock }}</td>
                <td>
                    <button type="button" class="btn btn-primary" @click="deleteProduct(value.productId)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>