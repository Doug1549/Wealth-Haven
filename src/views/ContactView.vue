
<template>
    
    <!--=============== CONTACT US ===============-->
    <section class="contact section" id="contact">
        <div class="contact__container container">
            <div class="contact__data">
                <h1 class="contact__title">Questions? Issues? Praises? Complaints? Bring it!</h1>
            </div>
        </div>
    </section>
    <section class="contact_details">
        <div class="contact__content container">
            <div class="contact-details__data grid">
                <h2>We want to hear from you!</h2>
                <p>Phone: <a href="tel:8002175209">(800) 217-5209</a></p>
                <p>Or <button class="modalBtn">Click Here</button> to send us an Email.</p>
            </div>
        </div>
    </section>
    <div v-show="thankyou" class="form_submit_alert">
        <p>Thank you for contacting us.</p>
    </div>
    <div class="modal">
        <div class="modal_head">
            <div></div>
            <div class="modal_logo">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <i class='bx bx-x modal-close'></i>
        </div>
        <div class="modal_body">
            <div class="form_heading">
                Contact Customer Support
            </div>
            <form action="">
                <input v-model="form.name" type="text" placeholder="Name">
                <input v-model="form.phone" type="phone" placeholder="Phone">
                <input v-model="form.email" type="email" placeholder="Email">
                <input v-model="form.subject" type="text" placeholder="Subject">
                <textarea v-model="form.message" name="" id="" cols="30" rows="3" placeholder="Message"></textarea>
            </form>
        </div>
        <div class="modal_footer">
            <button :disabled="loading" class="submit_btn" :class="loading ? 'button--loading' : ''"
                @click="sendMail()">{{ loading ? '' : 'Contact Us' }}
            </button>
        </div>
    </div>
    <div class="modal-active-bg"></div>

</template>

<script>
import axios from 'axios';
import querystring from 'querystring';
export default {
    name: 'Contact',
    data: () => ({
        sent: false,
        form: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
        thankyou:false,
        loading: false,
    }),
    methods: {
        sendMail() {
            if(this.name == "" || this.email == "" || this.phone == "" || this.subject == "" || this.message == ""){
                alert('Please Fill All Fields');
                return ;
            }
            this.loading = true;
            axios.post("https://dev.nytrotech.net/wealth-haven-server/api/send-mail", querystring.stringify(this.form)).then(res => {
                this.loading = false;
                let modalBody = document.querySelector('.modal');
                modalBody.classList.remove('show-modal');
                this.thankyou = true;
                setTimeout(()=>{
                    this.thankyou = false;
                },1500);
            }).catch((err)=>{
                alert(err.response.data.message);
                this.loading = false;
            });
        }
    },

    mounted() {

        $(document).ready(function () {
            $(this).scrollTop(0);
        });

        let modal = document.querySelector('.modalBtn'),
            modalBody = document.querySelector('.modal'),
            modalClose = document.querySelector('.modal-close');

        modal.onclick = () => {
            modalBody.classList.add('show-modal');
        }
        modalClose.onclick = () => {
            modalBody.classList.remove('show-modal');
        }
    }
}

</script>