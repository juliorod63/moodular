import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Picker } from "emoji-mart";

const Home: React.FC = () => {
  return (
    <IonPage>
       <IonContent className="ion-padding">
        <h2>
            Moodular
        </h2>

        <Picker
            title="Tu estado anímico:"
            include={["people"]}
        />
    </IonContent>
    </IonPage>
  );
};

export default Home;
