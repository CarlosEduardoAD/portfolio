<script>
import "../global.css";
import {fade, slide} from "svelte/transition";
import { onMount } from "svelte";

let pronto = false

onMount(() => {
    pronto = true
})

let languages = ['Se acalme, esta será uma experiência rápida e agradável',
 "Don't worry, this is just a quick and enjoyable overview",
  'Calmez-vous, ce sera une expérience rapide et agréable', 
  'Kalme, sa a pral yon eksperyans rapid ak bèl',
   "Calmati, questa sarà un'esperienza veloce e piacevole",
    "Rustig maar, dit wordt een snelle en aangename ervaring",
    "落ち着いて、これは迅速で楽しい経験になります"]

let age = 0

$: greeting = `${languages[age]}`;

function handleClick(){
    age = [Math.floor(generateRandomInteger(0, 6))]
}

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max - min + 1))
}



</script>

<main>
    {#if pronto}
    <section>

        <div class="flex items-center justify-center">
            <p class="text-center lg:text-4xl 2xl:text-5xl lg:break-normal text-3xl text-white mt-24 font-merri font-light transition-all duration-200" in:fade>{greeting}</p>
        </div>
        <div class="flex items-center justify-center">
        <button in:slide on:click={handleClick} class="btn 2xl:w-48 border-none w-28 mt-8 bg-gradient-to-bl from-blue-800 to-emerald-500 font-hindi font-bold text-slate-200">Mudar</button>
    </div>
    <div class='font-hind font-medium text-slate-200' in:fade>
        <p class="flex items-center justify-center text-center mt-8 xl:text-2xl">Sou Carlos Eduardo, estudante de Análise e Desenvolvimento de Sistemas.</p>
        <p class="flex items-center justify-center xl:text-xl">Me chame de &nbsp;<strong>Karl</strong>&nbsp; por enquanto</p>
    </div>
    <div in:slide class="hidden 2xl:flex 2xl:items-center 2xl:justify-center mt-4">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="900px" height="5px" xml:space="preserve">
            <path  fill="#ffffff" stroke-width="3" stroke="#ffffff" d="M0 0 l1120 0"/>
          </svg>          
    </div>
    <div in:slide class="hidden 2xl:hidden lg:flex lg:items-center lg:justify-center mt-4">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="600px" height="5px" xml:space="preserve">
            <path  fill="#ffffff" stroke-width="3" stroke="#ffffff" d="M0 0 l1120 0"/>
          </svg>          
    </div>
    <div in:slide class="2xl:hidden lg:hidden flex items-center justify-center mt-4">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="5px" xml:space="preserve">
            <path  fill="#ffffff" stroke-width="3" stroke="#ffffff" d="M0 0 l1120 0"/>
          </svg>          
    </div>
    <div >
        <p class="flex items-center justify-center 2xl:text-4xl mt-12 mb-12 text-2xl font-merri font-bold text-white">Meus principais Projetos</p>
        <div class="lg:flex lg:items-center lg:justify-center">
        <div in:slide class="flex items-center justify-center">
        <div class="card image-full bg-contain w-[350px] 2xl:w-[440px] lg:w-[320px] lg:mt-4 lg:mb-8 lg:ml-4 data-aos fade-up">
            <img class='2xl:h-[250px] h-[180px]' src="/nlw.png" alt="">
            <div class="card-body">
                <p class="card-title font-hind text-4xl font-bold text-slate-100 text-center">NLW Carlos</p>
                <p class="">Um pequeno site feito durante o bootcamp da Rocketseat <br>
                    <a href='https://nlw-impulse-carlos.vercel.app/' target="_blank" rel="noopener noreferrer" class="font-hind text-lg font-bold">VER PROJETO</a>
                </p>
            </div>
        </div>
    </div>
        <div in:slide class="flex items-center justify-center">
        <div class="card image-full bg-contain w-[350px] 2xl:w-[440px] lg:w-[320px] mt-8 lg:mt-4 lg:ml-4 lg:mb-8 lg:mr-4 data-aos fade-up">
            <img src="/discord.jpg" alt="">
            <div class="card-body ">
                <p class="card-title font-hind text-4xl font-bold text-slate-100 text-center">Sherlock_bot</p>
                <p class="">Um bot gerenciador de senhas feito usando Python e Discord.py<br>
                    <a href='https://github.com/CarlosEduardoAD/sherlock_project' target="_blank" rel="noopener noreferrer" class="font-hind text-lg font-bold">VER PROJETO</a>
                </p>
            </div>
        </div>
    </div>
    <div in:slide  class="flex items-center justify-center">
        <div class="card image-full bg-cover w-[350px] 2xl:w-[440px] lg:w-[320px] mt-8 lg:mt-4 lg:mb-8 lg:mr-4 data-aos fade-up">
            <img class='2xl:h-[250px] h-[180px]' src="/Flyers.png" alt="">
            <div class="card-body">
                <p class="card-title font-hind text-4xl font-bold text-slate-100 text-center">Flyers</p>
                <p class="">Um website simples feito com Vue.js 3<br>
                    <a href='https://flyers.vercel.app/' target="_blank" rel="noopener noreferrer" class="font-hind text-lg font-bold">VER PROJETO</a>
                </p>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div in:slide class="hidden 2xl:flex 2xl:items-center 2xl:justify-center mt-4">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="900px" height="5px" xml:space="preserve">
            <path  fill="#ffffff" stroke-width="3" stroke="#ffffff" d="M0 0 l1120 0"/>
          </svg>          
    </div>
    <div in:slide class="hidden 2xl:hidden lg:flex lg:items-center lg:justify-center mt-4">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="600px" height="5px" xml:space="preserve">
            <path  fill="#ffffff" stroke-width="3" stroke="#ffffff" d="M0 0 l1120 0"/>
          </svg>          
    </div>
    <div in:slide class="2xl:hidden lg:hidden flex items-center justify-center mt-4">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="5px" xml:space="preserve">
            <path  fill="#ffffff" stroke-width="3" stroke="#ffffff" d="M0 0 l1120 0"/>
          </svg>          
    </div>
    <div >
    <div in:fade class="font-bold ">
        <p class="font-merri flex items-center text-white justify-center text-4xl  mt-4 2xl:text-5xl">Sobre mim</p>
        <div>
            <p class="flex items-center justify-center font-hind text-xl font-semibold text-center mt-2 text-white 2xl:text-3xl">Sou de brasília e estou cursando atualmente o terceiro ano <br>
            do ensino médio junto com o curso técnico de desenvolvimento de sistemas, <br>
            programo desde 2021 e viso contribuir com meu código e minhas habilidades, <br>
            sempre mantendo o ambiente produtivo e descontráido claro</p>
        </div>
    </div>
    <div in:slide>
        <p class="text-xl font-hind font-bold flex items-center justify-center mt-7 text-white 2xl:text-2xl">Veja minhas redes sociais !</p>
    <div class="hidden 2xl:grid 2xl:grid-row-2 2xl:grid-flow-col 2xl:place-items-center ml-8 mt-8">
        <div class="flex pr-8 text-white"><a href='https://github.com/CarlosEduardoAD' target="_blank" rel="noopener noreferrer"><i class="devicon-github-original" style="font-size: 7rem"></i></a>
        <div class="flex pl-8 text-white
        "><a href="https://www.linkedin.com/in/carlos-eduardo-mariano-regis-990222219/" target="_blank" rel="noopener noreferrer"><i class="devicon-linkedin-plain" style="font-size: 7rem;"></i></a></div>
    </div>
</div>
    <div class="hidden 2xl:hidden lg:grid lg:grid-row-2 lg:grid-flow-col lg:place-items-center ml-8 mt-8">
        <div class="flex pr-8 text-white"><a href="https://github.com/CarlosEduardoAD" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original" style="font-size: 5rem"></i></a>
        <div class="flex pl-8 text-white
        "><a href="https://www.linkedin.com/in/carlos-eduardo-mariano-regis-990222219/" target="_blank" rel="noopener noreferrer"><i class="devicon-linkedin-plain" style="font-size: 5rem;"></i></a></div>
    </div>
</div>
    <div class="2xl:hidden lg:hidden grid grid-row-2 grid-flow-col place-items-center ml-8 mt-8">
        <div class="flex pr-8 text-white"><a href="https://github.com/CarlosEduardoAD" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original" style="font-size: 3rem"></i></a>
        <div class="flex pl-8 text-white
        "><a href="https://www.linkedin.com/in/carlos-eduardo-mariano-regis-990222219/" target="_blank" rel="noopener noreferrer"><i class="devicon-linkedin-plain" style="font-size: 3rem;"></i></a></div>
    </div>
</div>
<footer in:fade class="font-merri">
    <p class="text-2xl flex items-center justify-center font-bold text-white mt-4 font-merri 2xl:text-4xl">Obrigado pelo seu tempo</p>
    <p class="flex items-center justify-center text-xs font-semibold text-white whitespace-nowrap mt-20 font-hind 2xl:text-2xl">Copyright Carlos Eduardo, 2022 Todos os direitos Reservados</p>
</footer>
    </section>
    {/if}
</main>
