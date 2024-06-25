import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';
import resume from '~/assets/Vagish-Gupta-Resume.pdf';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="About Me" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Hello, I'm Vagish Gupta, currently pursuing a Bachelor of Computer Applications
      (BCA). I'm a web development enthusiast aiming to break into the industry.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My interest in computer science began in 10th grade. While browsing the web, I
      randomly discovered Python. Fascinated, I quickly started learning it and built my
      first program.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <div style={{display:'flex',gap:'1rem'}}>
                <a href={resume}>
                  <Button
                    secondary
                    className={styles.button}
                    data-visible={visible}
                    href=""
                    icon="download"
                  >
                    Resume
                  </Button>
                </a>
                <br />
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/contact"
                  icon="send"
                >
                  Send me a message
                </Button>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
