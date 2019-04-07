import React from 'react';
import {Deck, Heading, Link, List, ListItem, Slide} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme({
  primary: '#564154',
  secondary: '#FF6542',
  tertiary: '#E0CBA8',
  quaternary: '#779FA1'
});

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          With Enough Confidence,
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="tertiary" fit bold caps>
          You Can Move Fast
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Software
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Software
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          is meant to be Soft
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Soft Means
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          it should be easy to change
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Software Doesn&apos;t Truly Change
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Until It Is Delivered to Production
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Delivering Changes to Production
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Can be Scary
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Delivering Changes to Production
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Can be Dangerous
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Delivering Changes to Production
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Introduces Risk
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Risk
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Delivering Changes to Production
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Needs to be Safe
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Many Options Exist
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          to Reduce Risk
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Traditionally, Reducing Risk Meant
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Minimizing the Frequency of Changing Production
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Delivering to Production
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Required High Quality
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Delivering to Production Again
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Should Be Avoided
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Ensuring Quality Meant
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Making Software Less Soft
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Ensuring Quality Meant
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Not Going Fast
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Confidence
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Confidence Takes Too Long
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Without Automation
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Industry Is Trending
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Toward Automated Verification
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Specifics to Automate
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Vary By Team
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Focus On Automation
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          That Improves Confidence
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Focus
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Different Changes Involve
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Different Levels of Risk
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Some Defects Are Catastrophic
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Some Defects Are Cosmetic
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Some Risks Are Simple To Mitigate
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Some Risks Are Difficult To Mitigate
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Agree As a Team
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          About Risks and Trade-offs
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Gaps
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Some Common Practices
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Leave Gaps in Confidence
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          High Unit Test Coverage Provides No Confidence
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          That Units Are Compatible With Each Other
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          High Integration Test Coverage
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Often Misses Behavioral Detail
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Find a Balance That Gives Your Team
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Confidence
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Deployment Pipeline
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Changes Make it to Production
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          When All Verification Passes
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          No Changes Make it to Production
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          When Any Verification Fails
        </Heading>
      </Slide>

      {/*
        if perfection is holding you back, keep in mind you probably arent accomplishing perfection with current process
      */}

      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Rewards
        </Heading>
      </Slide>

      {/*
        * short feedback cycle
        * no more waiting for deployment to finish and verifying that everything worked. push and drive home
        * continuous deployment of apps
        * continuous deployment of packages
        * automated dependency updates
        * continuous deployment of package results in deployment of consuming applications
      */}

      <Slide transition={['fade']} bgColor="tertiary" textColor="secondary">
        <Heading size={1} fit textColor="primary">
          Matt Travi
        </Heading>

        <List>
          <ListItem>
            <Link textColor="secondary" target="_blank" href="https://matt.travi.org">
              matt.travi.org
            </Link>
          </ListItem>
          <ListItem>
            <Link textColor="secondary" target="_blank" href="https://twitter.com/mtravi">
              twitter.com/mtravi
            </Link>
          </ListItem>
          <ListItem>
            <Link textColor="secondary" target="_blank" href="https://confidence-to-move-fast.travi.org">
              confidence-to-move-fast.travi.org
            </Link>
          </ListItem>
        </List>
      </Slide>
    </Deck>
  );
}
