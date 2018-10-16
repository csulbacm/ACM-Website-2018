import React, {Component} from 'react'
import ScheduleDisplay from './ScheduleDisplay.js'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import '../styles/css/HomePage.css'

class HomePage extends Component {
  render() {
    return (
    <div>
      <div className="headParallax"></div>
      <div className="gradient">
        <Grid container direction="row" justify="center" alignItems="stretch" spacing={16} style={{width: '99%', margin: '10px'}}>
          <Grid item md={12} lg={9} style={{marginBottom: '25px'}}>
            <Paper style={{ marginLeft: 'auto', marginTop: '15px', marginBottom: '25px', height: '100%'}} elevation={2}>
              <h1 style={{textAlign: 'center'}}>What is ACM</h1>
              <p style={{width: '95%', textAlign: 'justify', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.3', fontSize: '20px'}}>
                  Lorem ipsum dolor sit amet, has mutat illud quaerendum te. Enim veri latine nam at, simul tation sea ei, autem saepe ornatus an est. Ex mea odio pericula. Eu nec scaevola facilisis.
                  Duo in elit tation ocurreret, omnis denique erroribus mel ne, ius lobortis splendide in. Pri an amet dicam oratio, mea ad quidam inermis. Illud utroque salutatus at mel, ex has solet singulis. Paulo evertitur ea mel, has eu omnes iudico. Eu est hinc fuisset lucilius, per malorum feugiat praesent ex, facer dolorum ceteros ius te.
                  Per possim nominavi ea. An vis dicam veritus. His alii percipitur id. Debitis placerat reprimique usu ex, est graece saperet dolorum ut. Ne nonumy copiosae luptatum usu, ei per idque fugit intellegam, accusam epicurei est an. Tale audiam contentiones vim et, no pro magna ubique.
                  Cum eu praesent laboramus, alienum epicuri nominavi ius no, unum explicari an vim. Cu timeam mediocritatem qui, nam melius expetenda ea. Aliquip molestiae disputando mel eu. Sit at prima modus, dicant inimicus intellegebat sit ne. Brute torquatos vel id, an vix tale referrentur.
                  Sint tation explicari ei his, erat noluisse disputando pro ad. Eam te scaevola torquatos, eos nemore integre gubergren id. Pro et omnium consequat quaerendum, movet sensibus democritum te eos. His ne liber petentium, ius ut stet fastidii senserit, animal dissentias vim no. At per fastidii imperdiet. Agam aperiam eripuit his in, no iriure labitur lucilius pri.
                  Debitis pertinax et usu, id mel erant delenit iudicabit, est legere feugait theophrastus at. No cum vide graecis. Labore principes ne usu, percipitur contentiones mei eu, aeterno principes evertitur mei et. Offendit indoctum no pri, illud iriure lucilius has no, nec saepe laoreet sensibus at. Justo utinam regione in eos.
                  Convenire mediocrem pri ut. Mel malis appareat an, omittam contentiones ei eos, vix ut stet dolorum consulatu. Sit harum nostrud aliquando no, in congue accumsan pri. Et melius numquam forensibus per, accusam elaboraret sed id.
                  No dicta praesent intellegam vix, ei dolor nemore appetere sed. Per legimus expetenda eu. Et clita facete delenit nam, luptatum necessitatibus pri in. Ad cetero accumsan phaedrum sit. Eu nec ipsum epicurei, ad liber gloriatur vis. Omnesque senserit pro ea, mel homero legere appareat cu. Eos ut dolorum indoctum, pri cu constituam comprehensam.
              </p>
            </Paper>
          </Grid>

          <Grid item md={12} lg={3} style={{marginBottom: '25px'}}>
            <ScheduleDisplay/>  
          </Grid>
        </Grid>
      </div>
    </div>
    );
  }
}

export default HomePage
