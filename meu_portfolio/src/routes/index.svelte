<script>
import "../global.css";
import {fade, slide} from "svelte/transition";
import { onMount } from "svelte";

let pronto = false

onMount(() => {
    pronto = true
})

let languages = ['Se acalme, esta será uma experiência rápida e agradável',
 'Calm down, this is gonna be an enjoyable and quick experience',
  'Calmez-vous, ce sera une expérience rapide et agréable', 
  'Kalme, sa a pral yon eksperyans rapid ak bèl',
   "Calmati, questa sarà un'esperienza veloce e piacevole",
    "Rustig maar, dit wordt een snelle en aangename ervaring",
    "落ち着いて、これは迅速で楽しい経験になります"]

let age = 0

$: greeting = `${languages[age]}`;

function handleClick(){
    age = [Math.floor(generateRandomInteger(0, 4))]
}

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max - min + 1))
}



</script>

<main>
    {#if pronto}
    <section>
        <div class="flex items-center justify-center">
            <p class="text-center text-3xl text-white mt-24 font-merri font-light transition-all duration-200" in:fade>{greeting}</p>
        </div>
        <div class="flex items-center justify-center">
        <button in:slide on:click={handleClick} class="btn border-none w-28 mt-8 bg-gradient-to-bl from-blue-800 to-emerald-500 font-hindi font-bold">Mudar</button>
    </div>
    <div class='font-hind font-medium text-slate-200' in:fade>
        <p class="flex items-center justify-center text-center mt-8">Sou Carlos Eduardo, estudante de Análise e Desenvolvimento de Sistemas.</p>
        <p class="flex items-center justify-center">Me chame de Karl por enquanto</p>
    </div>
    <div in:slide class="ml-12 mt-4">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="5px" xml:space="preserve">
            <path  fill="#ffffff" stroke-width="3" stroke="#ffffff" d="M0 0 l1120 0"/>
          </svg>          
    </div>
    <div>
        <p class="flex items-center justify-center mt-12 mb-12 text-3xl font-hind font-bold text-white">Meus principais Projetos</p>
        <div class="card image-full bg-contain w-[380px] ml-[4.5px]">
            <img src="/nlw.png" alt="">
            <div class="card-body">
                <p class="card-title font-hind text-4xl font-bold text-slate-100 text-center">NLW Carlos</p>
                <p class="">Um pequeno site com 3 páginas feito durante o bootcamp da Rocketseat <br>
                    <a href='https://nlw-impulse-carlos.vercel.app/'>Ver projeto</a>
                </p>
            </div>
        </div>
        <div class="card image-full bg-contain w-[380px] ml-[4.5px] mt-8">
            <img src="/nlw.png" alt="">
            <div class="card-body">
                <p class="card-title font-hind text-4xl font-bold text-slate-100 text-center">NLW Carlos</p>
                <p class="">Um pequeno site com 3 páginas feito durante o bootcamp da Rocketseat <br>
                    <a> aaa</a>
                </p>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
    </section>
    {/if}
</main>
