import React from 'react';
import { tributeData } from '../data/tributeData';

/**
 * RoleModel Section
 * The emotional centerpiece expressing how Subhickshun became a role model
 */
export const RoleModel = () => {
  const { roleModel } = tributeData;

  return (
    <section id="role-model" className="section-wrapper section-padding rolemodel-section" aria-label="My Role Model Tribute">
      <div className="site-container">
        <div className="rolemodel-container">
          <span className="rolemodel-label reveal-blur">
            {roleModel.heading}
          </span>

          <h2 className="rolemodel-title reveal-blur delay-1">
            BUT YOU BECAME MY <span>ROLE MODEL.</span>
          </h2>

          <div className="rolemodel-body">
            <p className="rolemodel-lead reveal-blur delay-2">
              "{roleModel.lead}"
            </p>

            <p className="rolemodel-takeaway reveal-blur delay-3">
              {roleModel.takeaway}
            </p>

            <p className="rolemodel-conclusion reveal-blur delay-4">
              "{roleModel.conclusion}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleModel;
