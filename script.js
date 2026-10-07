document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* ==========================================
           MENÚ
        ========================================== */

        const menuBtn =
            document.getElementById("menuBtn");

        const menu =
            document.getElementById("menu");


        if (menuBtn && menu) {

            menuBtn.addEventListener(
                "click",
                function () {

                    menu.classList.toggle(
                        "abierto"
                    );

                }
            );


            document
                .querySelectorAll(".menu a")
                .forEach(function (enlace) {

                    enlace.addEventListener(
                        "click",
                        function () {

                            menu.classList.remove(
                                "abierto"
                            );

                        }
                    );

                });

        }



        /* ==========================================
           CARRUSEL AUTOMÁTICO
        ========================================== */

        const fotos = [

            "imagenes/foto1.png",
            "imagenes/foto2.png",
            "imagenes/foto3.png",
            "imagenes/foto4.png",
            "imagenes/foto5.png"

        ];


        const imagenCarrusel =
            document.getElementById(
                "imagenCarrusel"
            );


        const puntos =
            document.querySelectorAll(
                ".carrusel-puntos .punto"
            );


        let posicion = 0;

        let temporizador;



        /* PRECARGAR FOTOS */

        fotos.forEach(function (ruta) {

            const imagen =
                new Image();

            imagen.src =
                ruta;

        });



        function actualizarPuntos() {

            puntos.forEach(
                function (punto, indice) {

                    punto.classList.toggle(
                        "activo",
                        indice === posicion
                    );

                }
            );

        }



        function mostrarFoto(
            nuevaPosicion
        ) {

            if (!imagenCarrusel) {
                return;
            }


            if (
                nuevaPosicion >=
                fotos.length
            ) {

                nuevaPosicion = 0;

            }


            if (
                nuevaPosicion < 0
            ) {

                nuevaPosicion =
                    fotos.length - 1;

            }


            imagenCarrusel.classList.add(
                "cambiando"
            );


            setTimeout(
                function () {

                    posicion =
                        nuevaPosicion;

                    imagenCarrusel.src =
                        fotos[posicion];

                    actualizarPuntos();

                    imagenCarrusel
                        .classList
                        .remove(
                            "cambiando"
                        );

                },
                300
            );

        }



        function siguienteFoto() {

            mostrarFoto(
                posicion + 1
            );

        }



        function iniciarCarrusel() {

            clearInterval(
                temporizador
            );


            temporizador =
                setInterval(
                    siguienteFoto,
                    3500
                );

        }



        if (imagenCarrusel) {

            iniciarCarrusel();


            puntos.forEach(
                function (punto) {

                    punto.addEventListener(
                        "click",
                        function () {

                            const indice =
                                Number(
                                    punto.dataset.indice
                                );


                            mostrarFoto(
                                indice
                            );


                            iniciarCarrusel();

                        }
                    );

                }
            );

        }



        /* ==========================================
           GALERÍA DE DISEÑOS
        ========================================== */

        const tarjetasGaleria =
            document.querySelectorAll(
                ".galeria-item"
            );


        const modal =
            document.getElementById(
                "modalGaleria"
            );


        const imagenModal =
            document.getElementById(
                "imagenModal"
            );


        const cerrarModal =
            document.getElementById(
                "cerrarModal"
            );



        /* ABRIR GALERÍA */

        tarjetasGaleria.forEach(
            function (tarjeta) {


                tarjeta.addEventListener(
                    "click",
                    function () {


                        const imagen =
                            tarjeta.querySelector(
                                "img"
                            );


                        if (
                            !imagen ||
                            !modal ||
                            !imagenModal
                        ) {

                            return;

                        }


                        imagenModal.src =
                            imagen.src;


                        imagenModal.alt =
                            imagen.alt;


                        modal.classList.add(
                            "mostrar"
                        );


                        document.body
                            .classList
                            .add(
                                "modal-abierto"
                            );


                    }
                );


            }
        );



        /* CERRAR GALERÍA */

        function cerrarGaleria() {


            if (!modal) {
                return;
            }


            modal.classList.remove(
                "mostrar"
            );


            document.body
                .classList
                .remove(
                    "modal-abierto"
                );


            imagenModal.src = "";


        }



        /* BOTÓN X */

        if (cerrarModal) {

            cerrarModal.addEventListener(
                "click",
                cerrarGaleria
            );

        }



        /* CLIC EN FONDO NEGRO */

        if (modal) {

            modal.addEventListener(
                "click",
                function (evento) {

                    if (
                        evento.target ===
                        modal
                    ) {

                        cerrarGaleria();

                    }

                }
            );

        }



        /* TECLA ESC */

        document.addEventListener(
            "keydown",
            function (evento) {

                if (
                    evento.key ===
                    "Escape"
                ) {

                    cerrarGaleria();

                }

            }
        );



        /* ==========================================
           FORMULARIO WHATSAPP
        ========================================== */

        const formulario =
            document.getElementById(
                "formCotizacion"
            );


        if (formulario) {

            formulario.addEventListener(
                "submit",
                function (evento) {


                    evento.preventDefault();


                    const nombre =
                        document
                            .getElementById(
                                "nombre"
                            )
                            .value
                            .trim();


                    const telefono =
                        document
                            .getElementById(
                                "telefono"
                            )
                            .value
                            .trim();


                    const correo =
                        document
                            .getElementById(
                                "correo"
                            )
                            .value
                            .trim();


                    const cantidad =
                        document
                            .getElementById(
                                "cantidad"
                            )
                            .value
                            .trim();



                    let mensaje =
                        "Hola Tico Sport, quisiera solicitar una cotización.\n\n";


                    mensaje +=
                        "Nombre: " +
                        nombre +
                        "\n";


                    mensaje +=
                        "Mi WhatsApp: " +
                        telefono +
                        "\n";


                    if (
                        correo !== ""
                    ) {

                        mensaje +=
                            "Correo: " +
                            correo +
                            "\n";

                    }


                    mensaje +=
                        "Cantidad aproximada: " +
                        cantidad +
                        " prendas.\n\n";


                    mensaje +=
                        "Quisiera recibir información sobre diseños, tallas y precios.";



                    const numero =
                        "51921427039";


                    const enlace =
                        "https://wa.me/" +
                        numero +
                        "?text=" +
                        encodeURIComponent(
                            mensaje
                        );


                    window.open(
                        enlace,
                        "_blank"
                    );


                }
            );

        }



        /* ==========================================
           FACEBOOK
        ========================================== */

        const facebookLink =
            document.getElementById(
                "facebookLink"
            );


        if (facebookLink) {

            facebookLink.addEventListener(
                "click",
                function (evento) {


                    if (
                        facebookLink
                            .getAttribute(
                                "href"
                            ) === "#"
                    ) {

                        evento.preventDefault();


                        alert(
                            "Todavía falta colocar el enlace oficial de Facebook de Tico Sport."
                        );

                    }


                }
            );

        }



        /* ==========================================
           AÑO AUTOMÁTICO
        ========================================== */

        const anio =
            document.getElementById(
                "anio"
            );


        if (anio) {

            anio.textContent =
                new Date()
                    .getFullYear();

        }


    }
);