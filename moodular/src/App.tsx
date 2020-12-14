import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import History from './pages/History';
import { calendar as calendarIcon, happy as happyIcon } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import "emoji-mart/css/emoji-mart.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonTabs>
                <IonRouterOutlet>
                    <Route path="/today" component={Home} exact={true} />
                    <Route path="/history" component={History} exact={true} />
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/today" />}
                    />
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="today" href="/today">
                        <IonIcon icon={calendarIcon} />
                        <IonLabel>Hoy</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="history" href="/history">
                        <IonIcon icon={happyIcon} />
                        <IonLabel>Historial</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
