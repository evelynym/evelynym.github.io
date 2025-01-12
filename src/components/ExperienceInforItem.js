import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
    display:'flex',
    alignContent:'center',
    justifyContent:'center',
  },
}));

function getSteps() {
  return ['Jul 2020 - Dec 2020', 'Dec 2020 - Oct 2021', 'Oct 2021 - '];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <p>
          <h3>Intern - Kunshan Kersen Science &amp; Technology Co., Ltd.</h3> <br />
          <h4 style={{color:'gray'}}>Major work &amp; Achivements:</h4>
          
          <p>Had exposure to the basic algorithms behind digital image processing.</p> 
          <p>Experienced image manipulations with OpenCV.</p> 
          <p>Participated in team discussions and contributed brainstorming ideas.</p>
          
        </p>
      );
    case 1:
      return (
        <p>
          <h3>Full-time - Kunshan Kersen Science &amp; Technology Co., Ltd.</h3> <br />
          <h4 style={{color:'gray'}}>Major work &amp; Achivements:</h4>
          <p>Assisted the development of digital image processing application.</p>
          <p>Implemented modules such as Rectangle/Cicle Calliper.</p>
          <p>Developed finance report generation application using Qt, C++ and MySQL with minimal supervision.</p>
          <p>Requirements gathering and business analysis.</p>
          <hr />
          <p>My time in Kersen Tech saw me join the digital image processing team. 
            In my time there, I have gained knowledge of the workings of openCV and 
            have completed several modules such as Threshold, Filters and Calipers. 
            I also took the liberty and completed a few small projects with OpenCV on my own.</p>

          <p>My second task there was to work on a finance report generator software to 
            reduce repeated workloads for the finance and HR departments. 
            For that project I had the chance to communicate with multiple stakeholders 
            and analyze business requirements before finally implement functionalities, 
            which levels up my communication and task management abilities.</p>
        </p>
      );
    case 2:
      return (
        <p>
          <h3>Full-time - QAD: Cloud ERP Software for Manufacturers</h3> <br />
          <h4 style={{color:'gray'}}>Major work &amp; Achivements:</h4>
          <p>Troubleshoot and fix bugs on QAD applications.</p>
          <p>Transform legacy desktop-application code into web application.</p>
          <p>Cooperate with other developers to improve QAD current features.</p>
          <p>Experience with modern CI/CD development tools such as Bamboo.</p>
          <p>Lean how to apply Agile software development in a real-world project.</p>
          <p>Follow Agile development methodologies.</p>
          <hr />
          <p>
          QAD’s ERP system contains a large amount of legacy code that is 
          written in Progress. Therefore, my first few weeks in QAD was mainly for 
          studying the programming language and frameworks they use for their ERP 
          system. I was able to pick up the syntax and grammar of Progress quickly 
          and was able to take on more challenging tasks in a short time frame.</p>
          <p>My main task is to transform stories brought up by QA into actual functions, 
            which has allowed me to explore and understand the workings of different modules 
            of the system and has given me in-depth knowledge of how a gigantic ERP system 
            is pieced together from smaller parts. During my time here, I have completed 
            and delivered several sprints in collaboration with another developer.</p>

          <p>As our team adopts agile development lifecycle, I have had the chance to 
            experience to explore project management with Jira and CI/DI with Bamboo, 
            which has given me practical knowledge of how modern software development 
            lifecycle functions and how different teams collaborate together to deliver 
            tasks with highest efficiency and minimal overheads.</p>
        </p>
      );
    default:
      return "Unknown step";
  }
}

export default function ExperienceInforItem() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="horizontal">
        {steps.map((label, index) => (
          <Step key={label}>
            <p>{label}</p>
            <StepContent>
              <p>{getStepContent(index)}</p>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <h4 >That's all -- want to see it again?</h4>
          <FingerprintIcon onClick={handleReset} className={classes.button} color="primary" fontSize='large'>
            {/* Go! */}
          </FingerprintIcon>
        </Paper>
      )}
    </div>
  );
}
