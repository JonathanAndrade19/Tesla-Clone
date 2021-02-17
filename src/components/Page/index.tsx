import React from 'react';
import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverLayContent from '../DefaultOverLayContent';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {['Modal One', 
            'Modal Two', 
            'Modal Three', 
            'Modal Four', 
            'Modal Five', 
            'Modal Six', 
            'Modal Seven',
            ].map(modelName => (
              <ModelSection
                key = {modelName}
                className="colored"
                modelName={modelName}
                overlayNode={
                  <DefaultOverLayContent
                    label={modelName}
                    description="Order Online for Delivery"
                  />
                }
              />
            ))}   
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;