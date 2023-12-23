import React from 'react'
import Processor from './Processor'
import ProcessorGeneration from './ProcessorGeneration'
import Brand from './Brand'
import Type from './Type'
import RamCapacity from './RamCapacity'
import SSDCapacity from './SSDCapacity'
import GraphicProcessorSeries from './GraphicProcessorSeries'

const Filters = () => {
  return (
    <div>
        <div id="accordion-collapse" data-accordion="collapse">
            <Brand />
            <hr />
            <Type />
            <hr />
            <Processor/>
            <hr />
            <ProcessorGeneration />
            <hr />
            <RamCapacity />
            <hr />
            <SSDCapacity />
            <hr />
            <GraphicProcessorSeries />
        </div>
    </div>
  )
}

export default Filters