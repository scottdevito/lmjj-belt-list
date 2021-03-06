import React from 'react';
import { Button, message } from 'antd';

const Belts = ({ belts, selectBelt, userDbInfo, beltImageModalToggle }) => {
  return (
    <div>
      {belts.map(belt => {
        console.log(userDbInfo.beltPermissionId + ' belt perm id');
        console.log(belt.beltId + ' BELT.BELTID');
        console.log(userDbInfo.beltPermissionId >= belt.beltId);
        if (
          parseInt(userDbInfo.beltPermissionId, 10) >= parseInt(belt.beltId, 10)
        ) {
          return (
            <div
              className="item"
              key={belt.beltId}
              onClick={() => {
                selectBelt(belt.beltColor);
                beltImageModalToggle();
              }}
            >
              <Button size="large" type="primary" key={belt.beltId}>
                {belt.beltName}
              </Button>
            </div>
          );
        } else {
          return (
            <div
              className="item"
              key={belt.beltId}
              onClick={() =>
                message.warning(
                  'You do not have access to this belt yet. Please select another belt.'
                )}
            >
              <Button size="large" type="dashed" key={belt.beltId}>
                {belt.beltName}
              </Button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Belts;
