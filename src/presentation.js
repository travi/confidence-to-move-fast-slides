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
          Won&apos;t Prescribe
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Specifics to Automate
        </Heading>

        <List textColor="primary">
          <ListItem>Beyond the scope of this talk</ListItem>
          <ListItem>Varies greatly based on context</ListItem>
        </List>
      </Slide>

      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Encourage Focus On
        </Heading>
        <Heading size={2} margin="10px 0 0" textColor="primary" fit bold caps>
          Automation That Improves Confidence
        </Heading>
      </Slide>

      {/*
            two things to be confident in
            * not breaking users in production
            * successful deployment
      */}

      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
          Perfection
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
