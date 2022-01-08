import React from 'react'
import CardRazasPerros from '../components/CardRazasPerros';
import collie from '../media/BorderCollie.jpg';
import beagle from '../media/Beagle.jpg';
import doberman from '../media/doberman.jpg';
import golden from '../media/golden-retriever.jpg';
import poodle from '../media/freshpoodle.jpg';


function Index() {
    return (
        <section>
            <h1>Razas de Perros</h1>
                <ul className="breedCardContainer">
                    <CardRazasPerros nombreRaza='Beagle' imagen={beagle} />
                    <CardRazasPerros nombreRaza='BorderCollie' imagen={collie} />
                    <CardRazasPerros nombreRaza='FreshPoodle' imagen={poodle} />
                    <CardRazasPerros nombreRaza='GoldenRetriever' imagen={golden} />
                    <CardRazasPerros nombreRaza='Doberman' imagen={doberman} />
                </ul>
        </section>
    )
}

export default Index;