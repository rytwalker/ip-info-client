import React from 'react';
import styled from 'styled-components';

const Results = ({ results }) => {
  const unknown = '???';
  return (
    <ResultsContainer>
      <Group>
        <ResultsKey>IP Address:</ResultsKey>{' '}
        <ResultsValue>{results.ip ? results.ip : unknown}</ResultsValue>
      </Group>
      <Group>
        <ResultsKey>City:</ResultsKey>{' '}
        <ResultsValue>{results.city ? results.city : unknown}</ResultsValue>
      </Group>
      <Group>
        <ResultsKey>State:</ResultsKey>{' '}
        <ResultsValue>
          {results.region_name ? results.region_name : unknown}
        </ResultsValue>
      </Group>
      <Group>
        <ResultsKey>Zip:</ResultsKey>{' '}
        <ResultsValue>{results.zip ? results.zip : unknown}</ResultsValue>
      </Group>
      <Group>
        <ResultsKey>Country:</ResultsKey>{' '}
        <ResultsValue>
          {results.country_name
            ? results.country_name + ' ' + results.location.country_flag_emoji
            : unknown}
        </ResultsValue>
      </Group>
      <Group>
        <ResultsKey>Continent:</ResultsKey>{' '}
        <ResultsValue>
          {results.continent_name ? results.continent_name : unknown}
        </ResultsValue>
      </Group>
      <Group>
        <ResultsKey>Latitude:</ResultsKey>{' '}
        <ResultsValue>
          {results.latitude ? results.latitude : unknown}
        </ResultsValue>
      </Group>
      <Group>
        <ResultsKey>Longitude:</ResultsKey>{' '}
        <ResultsValue>
          {results.longitude ? results.longitude : unknown}
        </ResultsValue>
      </Group>
    </ResultsContainer>
  );
};

const ResultsContainer = styled.div`
  margin-bottom: 3rem;
`;

const Group = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const ResultsKey = styled.div`
  margin-right: 1rem;
`;

const ResultsValue = styled.div`
  font-weight: 700;
`;

export default Results;
