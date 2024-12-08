import React from 'react';
import { ComponentPC, CPU, GPU } from '../model/ComponentPC';
import './Taula.css';

function Taula(props) {
    return (
        
            <tbody className="contingut">
                {props.components.map((component, index) => {
                    switch (component.categoria) {
                        case 'CPU':
                            const cpu = new CPU(component);
                            return <tr key={index}>{cpu.render()}</tr>;
                        case 'GPU':
                            const gpu = new GPU(component);
                            return <tr key={index}>{gpu.render()}</tr>;
                        default:
                            const defaultComponent = new ComponentPC(component);
                            return <tr key={index}>{defaultComponent.render()}</tr>;
                    }
                    }
                )}
            </tbody>
        
    );
}

export default Taula;
