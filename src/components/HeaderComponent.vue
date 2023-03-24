<script>
import { puxlesApi } from '@/common/api';

export default {
    name: 'HeaderComponent',
    props: {
        isHome: Boolean,
        isCreate: Boolean
    },
    methods: {
        getReport: () => {
            puxlesApi.get("report/get", {
                responseType: "blob"
            }).then((res) => {
                console.log(res)
                let fileURL = window.URL.createObjectURL(new Blob([res.data]))
                let fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', 'report.xlsx');
                document.body.appendChild(fileLink);

                fileLink.click();
            });
        }
    }
}
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark shadow">
            <div class="container-fluid m-0">
                <div class="row justify-content-center col-12  ">

                    <a class="navbar-brand text-center" href="/">Puxles</a>

                    <ul class="navbar-nav mb-2 mb-lg-0 col-12 m-auto justify-content-center">
                        <li class="nav-item m-2" style="display: inline-block;">
                            <a v-bind:class="[isCreate ? 'active' : '', 'nav-link']" href="/product/create"
                                id="create">Create</a>
                        </li>
                        <li class="nav-item m-2" style="display: inline-block;">
                            <a v-bind:class="[isHome ? 'active' : '', 'nav-link']" href="/" id="home">Home</a>
                        </li>
                        <li class="nav-item m-2" style="display: inline-block;">
                            <a type="button" @click="getReport" class="nav-link" href="#" id="report">
                                Report
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

.bg-color-header {
    background-color: #0B41A8 !important;
}

.navbar-brand {
    font-size: 40px !important;
    font-family: 'Rubik', sans-serif;
}

.nav-item {
    font-size: 25px;
    font-family: 'Roboto Mono', monospace;
}

.nav-item:hover,
.active {
    font-size: 35px;
}
</style>
