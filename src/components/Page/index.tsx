import React from 'react';
import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverLayContent from '../DefaultOverLayContent';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection
            className="colored"
            modelName="Model One"
            overlayNode={
              <DefaultOverLayContent
                label="Model One"
                description="Order Online for Delivery"
              />
            }
          />
            
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;