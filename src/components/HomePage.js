import React, {Component} from 'react'
import ScheduleDisplay from './ScheduleDisplay.js'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import '../styles/css/HomePage.css'
import Particles from 'react-particles-js';

import MyCarousel from './MyCarousel'
import Parallax from 'react-springy-parallax'

const particleParams = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class HomePage extends Component {
  render() {
    return (
    <div>
      <div>
        
        <Parallax style={{background: "linear-gradient(to bottom, #2196f3, #00a5f7, #00b4f8, #00c1f7, #30cef4)"}} ref='parallax' pages={3}>
          <Particles params={particleParams} style={{position: "absolute", display: "inline-block"}} />
      
          <Parallax.Layer offset={0} speed={1} />
          <Parallax.Layer offset={1} speed={1} />
          <Parallax.Layer offset={2} speed={1} />

          <Parallax.Layer
            offset={0}
            speed={1}>
            <MyCarousel className=""/>
          </Parallax.Layer>


          <Parallax.Layer
            offset={1}
            speed={1}>
            <div style={{textAlign: 'center'}}>
              <div style={{display: 'inline-block'}}>
                <h1 style={{textAlign: 'center'}}>What is ACM</h1>
                <p style={{width: '80%', textAlign: 'justify', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5', fontSize: '20px'}}>
                    Lorem ipsum dolor sit amet, has mutat illud quaerendum te. Enim veri latine nam at, simul tation sea ei, autem saepe ornatus an est. Ex mea odio pericula. Eu nec scaevola facilisis.
                    Duo in elit tation ocurreret, omnis denique erroribus mel ne, ius lobortis splendide in. Pri an amet dicam oratio, mea ad quidam inermis. Illud utroque salutatus at mel, ex has solet singulis. Paulo evertitur ea mel, has eu omnes iudico. Eu est hinc fuisset lucilius, per malorum feugiat praesent ex, facer dolorum ceteros ius te.
                    Per possim nominavi ea. An vis dicam veritus. His alii percipitur id. Debitis placerat reprimique usu ex, est graece saperet dolorum ut. Ne nonumy copiosae luptatum usu, ei per idque fugit intellegam, accusam epicurei est an. Tale audiam contentiones vim et, no pro magna ubique.
                    Cum eu praesent laboramus, alienum epicuri nominavi ius no, unum explicari an vim. Cu timeam mediocritatem qui, nam melius expetenda ea. Aliquip molestiae disputando mel eu. Sit at prima modus, dicant inimicus intellegebat sit ne. Brute torquatos vel id, an vix tale referrentur.
                    Sint tation explicari ei his, erat noluisse disputando pro ad. Eam te scaevola torquatos, eos nemore integre gubergren id. Pro et omnium consequat quaerendum, movet sensibus democritum te eos. His ne liber petentium, ius ut stet fastidii senserit, animal dissentias vim no. At per fastidii imperdiet. Agam aperiam eripuit his in, no iriure labitur lucilius pri.
                    Debitis pertinax et usu, id mel erant delenit iudicabit, est legere feugait theophrastus at. No cum vide graecis. Labore principes ne usu, percipitur contentiones mei eu, aeterno principes evertitur mei et. Offendit indoctum no pri, illud iriure lucilius has no, nec saepe laoreet sensibus at. Justo utinam regione in eos.
                    Convenire mediocrem pri ut. Mel malis appareat an, omittam contentiones ei eos, vix ut stet dolorum consulatu. Sit harum nostrud aliquando no, in congue accumsan pri. Et melius numquam forensibus per, accusam elaboraret sed id.
                    No dicta praesent intellegam vix, ei dolor nemore appetere sed. Per legimus expetenda eu. Et clita facete delenit nam, luptatum necessitatibus pri in. Ad cetero accumsan phaedrum sit. Eu nec ipsum epicurei, ad liber gloriatur vis. Omnesque senserit pro ea, mel homero legere appareat cu. Eos ut dolorum indoctum, pri cu constituam comprehensam.
                </p>
              </div>
            </div>
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={1}>
            <div style={{width: '80%', textAlign: 'center'}}>
              <div style={{display: 'inline-block'}}>
                <ScheduleDisplay/>
              </div>
            </div>
            
          </Parallax.Layer>

        </Parallax>
        <div style={{position: 'absolute', right: '3%', top: '50%'}}>
          <Grid container direction="column" justify="flex-start" alignItems="center">
            <button className="circleButton" onClick={() => this.refs.parallax.scrollTo(0)}></button>
            <button className="circleButton" onClick={() => this.refs.parallax.scrollTo(1)}></button>
            <button className="circleButton" onClick={() => this.refs.parallax.scrollTo(2)}></button>
          </Grid>
        </div>
      </div>
    </div>
    );
  }
}

export default HomePage
