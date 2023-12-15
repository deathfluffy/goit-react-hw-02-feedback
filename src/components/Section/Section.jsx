import PropTypes from 'prop-types';

import { SectionContainer, Title } from './Section.module';

export default function Section ( title, children )  {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};