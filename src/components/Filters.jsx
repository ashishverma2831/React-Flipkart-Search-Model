import React from 'react'
import Processor from './Processor'
import ProcessorGeneration from './ProcessorGeneration'
import Brand from './Brand'
import Type from './Type'
import RamCapacity from './RamCapacity'
import SSDCapacity from './SSDCapacity'
import GraphicProcessorSeries from './GraphicProcessorSeries'
import ScreenSize from './ScreenSize'
import OperatingSystem from './OperatingSystem'
import Lifestyle from './Lifestyle'
import Weight from './Weight'
import TouchScreen from './TouchScreen'
import ProcessorBrand from './ProcessorBrand'
import Usage from './Usage'
import DedicatedGraphicsMemory from './DedicatedGraphicsMemory'
import StorageType from './StorageType'
import GraphicMemoryType from './GraphicMemoryType'
import GraphicProcessorName from './GraphicProcessorName'
import HardDiskCapacity from './HardDiskCapacity'
import RamType from './RamType'
import Features from './Features'
import Availability from './Availability'
import Discount from './Discount'
import CustomerRatings from './CustomerRatings'
import GSTInvoiceAvailable from './GSTInvoiceAvailable'
import Offers from './Offers'
import Price from './Price'

const Filters = () => {
  return (
    <div>
        <div id="accordion-collapse" data-accordion="collapse">
            <Price />
            <hr />
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
            <hr />
            <ScreenSize />
            <hr />
            <OperatingSystem />
            <hr />
            <Lifestyle />
            <hr />
            <Weight />
            <hr />
            <TouchScreen />
            <hr />
            <ProcessorBrand />
            <hr />
            <Usage />
            <hr />
            <DedicatedGraphicsMemory />
            <hr />
            <Features />
            <hr />
            <StorageType />
            <hr />
            <GraphicMemoryType />
            <hr />
            <GraphicProcessorName />
            <hr />
            <HardDiskCapacity />
            <hr />
            <RamType />
            <hr />
            <Availability />
            <hr />
            <Discount />
            <hr />
            <CustomerRatings />
            <hr />
            <GSTInvoiceAvailable />
            <hr />
            <Offers />
            <hr />
        </div>
    </div>
  )
}

export default Filters