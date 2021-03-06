import React, {useState} from 'react'
import show1 from '../assets/img/show1.JPG'
import show2 from '../assets/img/show2.JPG'
import show3 from '../assets/img/show3.JPG'
import recorte3 from '../assets/img/recorte3.png'
import kpop from '../assets/img/kpop.JPG'
import a11 from '../assets/img/a11.JPG'
import a12 from '../assets/img/a12.JPG'
import a13 from '../assets/img/a13.JPG'
import FotoCard from './FotoCard'
import ModalGal from './ModalGal';
import {Transition } from '@headlessui/react'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Shows = ({fotos}) => {
    const features = [
        { image: kpop },
        { image: recorte3 },
        { image: show3 },
        { image: show2 },
        { image: show1},
      ]

    const [open, setOpen] = useState(false);
    const [ima, setIma] = useState('');

    const openModal = (image) => {
        setIma(image);
        setOpen(true);
    };
    return (
        <div className="container mx-auto my-20 px-4 relative  overflow-hidden rounded-lg bg-opacity-25" id='begin'>
          <div className='bg-gradient-to-r from-yellow-300 to-yellow-500 p-10 rounded-xl'>
              <h1 className='my-4 text-4xl tracking-tight font-bold text-red-700 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>
                  Shows de Maids en vivo</h1>
                  <img onClick={() => openModal(features.image = show1)} src={features.image = show1} alt="" className='sm:float-right sm:w-72 sm:h-auto sm:ml-4 rounded-xl' />
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '>  Uno de los atractivos mas visuales de nuestros eventos han sido nuestras Maids.  Lindas y simpaticas chicas vestidas con traje de cridada al estilo bitoriano, dispuesta a ofrecer sus mas cordiales y sutiles servicios para el bien estar de sus amo.
              </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '>  Las maids caf??s son b??sicamente cafeter??as, aunque en estos lugares las meseras son conocidas como maids y visten trajes que son una fusi??n entre los uniformes de las sirvientas francesas del siglo 19 y los vestidos que usan las hero??nas de los animes. En ocasiones puede incluir una gargantilla, una diadema con orejas de gato o conejo, una cola de gato y otras cosas m??s que tengan que ver con gatos. Adem??s del vestuario, las meseras tienen que actuar como si los clientes fueran sus "amos" o "se??ores" y atenderlos como si estos regresaran a casa despu??s de un largo viaje o algo as??.
             </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '>
              Por supuesto, no puede faltar la comida, los postres y el caf??. Aunque la comida es lo menos importante en estos lugares, no por eso deja de ser buena. Dependiendo del caf??, puede ser comida japonesa ???como sushi, onigiris, takoyakis, ramen, calpis y t?? verde??? o puede ser comida m??s b??sica ???s??ndwiches, papas, refrescos o malteadas???. Lo principal aqu?? son los postres y no por el sabor, sino por la manera en que se sirven. Las maids preparan tus postres y los decoran con dibujitos tiernos de corazones, gatitos, conejitos, ositos, totoros, doraemons y hasta dedicatorias. Adem??s, cuando te lo entregan, lo hacen con todo su amor para que sepa mejor. Claro.
               </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '>
              En estos caf??s suele haber karaokes, juegos de mesa y videojuegos para que el cliente cante y juegue con las maids o sus amigos. A veces hay espect??culos en los que las meseras cantan y bailan para entretener a los clientes y hasta hay cat??logos para que ellos escojan qu?? pel??cula o anime quieren ver.
              </p>
          </div>
          <div className='my-4 bg-gradient-to-r from-yellow-300 to-yellow-500 p-10 rounded-xl'>
              <h1 className='my-4 text-4xl tracking-tight font-bold text-red-700 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>
                  Shows de M??sica</h1>
                  <img onClick={() => openModal(features.image = show2)} src={features.image = show2} alt="" className='sm:float-left sm:w-72 lg:w-80 sm:h-auto sm:mr-4 rounded-xl' />
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Los talentos siempre dan a aflorar en neustros eventos, el arte y la m??sica son uno de ellos, con canciones en vivo de los temas anim??s mas populares, al igual que temas kpop en su propio idioma koreano.
              </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Existen los shows como parte del entretenimento que ofrecen neustros eventos Asian Sucre, al igual que las competiciones para elegir a la mejor voz en el torneo de Karaoke.  La apreciacion del p??blico es la que elije cual talento es el mejor y pueden disfrutar de exelentes premios.
             </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Todos hemos llegado a ese momento, el estr??s y la adrenalina se apoderan de nuestros cuerpos y la duda surge en nuestras cabezas como un martilleo constante, ??qu?? opening va mejor conmigo y no quedar mal? Y es que para nosotros los seguidores del anime, es inevitable no cantar nuestros openings o endings favoritos, ya sea por ??picos, por cari??o a la serie o porque la letra nos transmite algo. Todo ello en conjunto hace manar un set de openings personales, esos que nos ponen la piel de gallina, y no se preocupen al final no hace falta tener una voz a veces tan prodigiosa como la de un C??sar Franco o una Nana Mizuki, lo importante es disfrutar el momento y dar nuestro mejor espect??culo.
             </p>
          </div>
          <div className='my-4 bg-gradient-to-r from-yellow-300 to-yellow-500 p-10 rounded-xl'>
              <h1 className='my-4 text-4xl tracking-tight font-bold text-red-700 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>
                  Exhibici??n talento Geisha</h1>
                  <img onClick={() => openModal(features.image = show3)} src={features.image = show3} alt="" className='sm:float-right sm:w-72 lg:w-80 sm:h-auto sm:ml-4 rounded-xl' />
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Las geishas no son prostitutas. Lo afirman ellas de manera tajante y lo corroboran las leyes japonesas. En 1958, tras prohibirse oficialmente la prostituci??n en Jap??n, muchos burdeles se camuflaron tras la etiqueta de spas o ba??os turcos.
              </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Las geishas y maikos (aprendices de geishas) son una de las im??genes m??s ic??nicas de Jap??n y por eso hablar?? de ellas en este art??culo a modo de introducci??n.
             </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Dedicadas de por vida a las artes tradicionales japonesas, su labor consiste en entretener y hacer compa????a a sus clientes durante espect??culos o banquetes, bailando, cantando, recitando poes??a, sirviendo el t?? o simplemente charlando de una manera divertida y delicada.
             </p>
          </div>
          <div className='my-4 bg-gradient-to-r from-yellow-300 to-yellow-500 p-10 rounded-xl'>
              <h1 className='my-4 text-4xl tracking-tight font-bold text-red-700 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>
                  Exhibici??n de artes marciales</h1>
                  <img onClick={() => openModal(features.image = recorte3)} src={features.image = recorte3} alt="" className='sm:float-left sm:w-72 lg:w-80 sm:h-auto sm:mr-4 rounded-xl' />
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> Las Artes marciales japonesas se refieren a la enorme variedad de artes marciales de los nativos de Jap??n. Por lo menos tres t??rminos japoneses a menudo se utilizan indistintamente con la frase "artes marciales japonesas": "Bud??", que literalmente significa "camino marcial", "bujutsu" (??????), que no tiene traducci??n perfecta, pero significa algo as?? como ciencia, el arte, o el arte de la guerra, y "bugei" (??????), que literalmente significa "arte marcial".
              </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> El wushu es a la vez una exposici??n y un deporte de contacto completo derivado de las artes marciales chinas tradicionales1???2??? Fue desarrollado en China a partir de 1949, en un esfuerzo para estandarizar la pr??ctica de las artes marciales tradicionales chinas,3??? si bien los intentos de estructurar las diversas tradiciones de artes marciales descentralizados se remontan a tiempo atr??s, cuando el Instituto Central Guoshu se estableci?? en Nank??n en 1928. El t??rmino wushu es la palabra china para 'artes marciales' (??? wu = 'militar' o 'marcial'; ??? shu = 'arte'). Actualmente, el wushu se ha convertido en un deporte internacional a trav??s de la Federaci??n Internacional de Wushu (IWUF),
             </p>
          </div>
          <div className='my-4 bg-gradient-to-r from-yellow-300 to-yellow-500 p-10 rounded-xl'>
              <h1 className='my-4 text-4xl tracking-tight font-bold text-red-700 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>
                  Cover Dance Kpop</h1>
                  <img onClick={() => openModal(features.image = kpop)} src={features.image = kpop} alt="" className='sm:float-right sm:w-72 lg:w-80 sm:h-auto sm:ml-4 rounded-xl' />
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '> El Kpop es un g??nero musical que incluye diversos estilos como el pop, hip hop, EDM, rock o R&B, y que se refiere espec??ficamente a la m??sica popular de Corea del Sur,2??? debido a que Corea del Norte no posee una industria de m??sica popular con influencia occidental
              </p>
              <p className='my-2 font-rale font-bold text-justify cursor-default text-black '>La relaci??n del K-pop con la cosm??tica coreana es innegable, numerosos idols son imagen de un gran n??mero de marcas de cosm??tica que inundan el pa??s. En Corea del Sur el uso de la cosm??tica no solo se cierra al mercado femenino, sino que es usada tambi??n por hombres, estos se preocupan de su aspecto tanto como las mujeres. En los ??ltimos a??os la cosm??tica coreana est?? traspasando fronteras llegando hasta otros muchos pa??ses en forma de tiendas especializadas, como es el caso de Korean Queens, la primera tienda espa??ola en l??nea especializada en la venta de cosm??tica coreana.
             </p>
          </div>

          <h1 className='my-6 text-4xl text-center tracking-tight font-bold text-yellow-400 sm:text-5xl md:text-6xl transition duration-700 ease-in-out'>
                  Agrupaciones regionales de cover KPOP</h1>

           <div className="px-5 grid grid-cols-2 md:px-20 md:grid-cols-3 gap-2">
            {fotos.map((foto) =>
               <FotoCard key={foto.id} foto={foto} openModal={openModal}/>
            )}
            </div>

            <div class="flex justify-end mt-4">
                <a href="#begin">
                    <button type="button" className="ml-2 bg-gray-800 h-10 w-10 p-1 rounded-full text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <FontAwesomeIcon  icon={faArrowUp} size='lg'/>
                    </button>
                </a>
            </div>

            <Transition.Root show={open} as={'div'}>
                <ModalGal ima={ima} setOpen={setOpen}/>
           </Transition.Root>
        </div>
    )
}

export default Shows
