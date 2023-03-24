<script>
export default {
    name: 'FooterComponent'
}
</script>

<template>
    <div class="container-fluid my-5 bg-dark">
        <footer class="text-white text-center text-lg-start bg-dark">
            <div class="container bg-dark p-4">
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase mb-4">About company</h5>

                        <p>Puxles es una empresa con mucho talento joven y capacidades de construcción de soluciones
                            software genéricas y a la medida de las necesidades de nuestros clientes, construyendo durante
                            años productos software con diseños arquitecturales flexibles e innovadores</p>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

                        <div class="form-outline form-white mb-4">
                            <input type="text" id="formControlLg" class="form-control form-control-lg" />
                            <label class="form-label" for="formControlLg">Search</label>
                        </div>

                        <ul class="fa-ul" style="margin-left: 1.65em;">
                            <li class="mb-3">
                                <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">New York, NY 10012,
                                    US</span>
                            </li>
                            <li class="mb-3">
                                <span class="fa-li"><i class="fas fa-envelope"></i></span><span
                                    class="ms-2">info@example.com</span>
                            </li>
                            <li class="mb-3">
                                <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+ 01 234 567
                                    88</span>
                            </li>
                            <li class="mb-3">
                                <span class="fa-li"><i class="fas fa-print"></i></span><span class="ms-2">+ 01 234 567
                                    89</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase mb-4">Opening hours</h5>

                        <table class="table text-center text-white">
                            <tbody class="font-weight-normal">
                                <tr>
                                    <td>Mon - Thu:</td>
                                    <td>8am - 9pm</td>
                                </tr>
                                <tr>
                                    <td>Fri - Sat:</td>
                                    <td>8am - 1am</td>
                                </tr>
                                <tr>
                                    <td>Sunday:</td>
                                    <td>9am - 10pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>