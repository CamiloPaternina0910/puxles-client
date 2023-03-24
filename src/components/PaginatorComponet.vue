<script>

export default {
    name: "PaginatorComponent",
    props: {
        currentPage: Number,
        lastPage: Boolean,
    },
    methods:{
        previusPage: () => {
            this.$router.push(`/products?page=${this.currentPage-1}&elements=10`)
        },
        nextPage: () => {
            this.$router.push(`/products?page=${this.currentPage+1}&elements=10`)
        }
    }
}
</script>

<template>
    <nav aria-label="paginator">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#" v-if="current > 1" @click="previusPage">{{ currentPage-1 }}</a></li>
            <li class="page-item active">
                <span class="page-link">
                    {{ currentPage + 1}}
                </span>
            </li>
            <li class="page-item" v-if="!lastPage">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>