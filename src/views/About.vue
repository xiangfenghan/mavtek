<template>
    <div>
        <div class="about">
            <div class="about__pic">
                <img src="http://xiangfenghan.com/images/profile-thum.png" />
            </div>
            <h1 class="about__title">Hello, <span>I am a Web Developer | Web Designer | Graphic Designer</span></h1>
            <p class="about__me">
                I have more than 10 years experience as a graphic designer and more than 5 years experience as a web ingegrator/front-end programmer.
                I have experience of working with PHP and Java, and excellent knowledges in the production of HTML5, CSS3, SASS/LESS, JavaScript/jQuery, also working with Git, Jira, Agile environment.
            </p>
            <p class="about__me">
                As a graphic designer I have excellent knowledge of Adobe CS software such as Photoshop, Illustrator and experienced with Adobe XD.
            </p>
            <p class="about__me">
                I work on both Mac and PC. I have a lot of creativity, I am always excited to bring a combination of design and web programming together to my career, and the quality of my work is always appreciated.
            </p>
        </div>
        <div class="skewBg"></div>
    </div>
</template>

<style lang="scss" scoped>
    .about {
        position: relative;
        color: #ffffff;
        font-size: 16px;
        text-align: center;
        z-index: 1;

        &__pic {
            margin: 0 auto;
            max-width: 200px;

            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }

        &__title {
            color: #333333;
            font-size: 24px;

            span {
                display: block;
                margin: 5px auto;
                padding: 5px;
                background-color: #ffbb00;
                font-size: 20px;
            }
        }

        &__me {
            max-width: 600px;
            margin: 20px auto;
            color: #333333;
            text-align: justify;
        }
    }

    .skewBg {
        position: absolute;
        top: 800px;
        right: 0;
        width: 100%;
        min-height: 200px;
        padding: 200px 0;
        background: #ffbb00;
        transform: skew(0deg, -10deg);
        z-index: 0;
    }

</style>



