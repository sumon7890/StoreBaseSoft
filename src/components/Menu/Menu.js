/* eslint-disable jsx-a11y/anchor-is-valid */
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import React from "react";



const Menu = () => {
  return (
    <div>
       <TreeItem nodeId="1" label="Home">
      </TreeItem>
      <TreeView
      aria-label="multi-select"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
      sx={{ height: 900, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="3" label="Chrome" />
        <TreeItem nodeId="4" label="Webstorm" />
      </TreeItem>

      <TreeItem nodeId="5" label=" Store Entry">

      <TreeItem nodeId="6" label="Yarn Store">
          <TreeItem nodeId="7" label="Yarn Received"/>
          <TreeItem nodeId="8" label="Yarn Delivery knitting"/>
          <TreeItem nodeId="9" label="Sub-Contact Yarn Delivery "/>
          <TreeItem nodeId="10" label="Sub-Contact Yarn Received "/>
          </TreeItem>
      
        <TreeItem nodeId="11" label="Accessories Store">
          <TreeItem nodeId="12" label="Shipment Challah"/>
          <TreeItem nodeId="13" label="Accessories Received"/>
         
        </TreeItem>
      
      <TreeItem nodeId="14" label="Grey Fabric Store">
          <TreeItem nodeId="15" label="Knitting Fabric Received"/>
          <TreeItem nodeId="16" label="Sub-Contact Fabric Delivery Ch"/>
          <TreeItem nodeId="17" label="Sub-Contact Fabric Received Entry "/>
        </TreeItem>
        <TreeItem nodeId="18" label="Finished Fabric Store">
          <TreeItem nodeId="19" label="Fabric Received"/>
          <TreeItem nodeId="20" label="Fabric Delivery Cutting"/>
          <TreeItem nodeId="21" label="Sub-Contact Fabric Received "/>
          </TreeItem>
         </TreeItem>

         <TreeItem nodeId="22" label=" Report">

      <TreeItem nodeId="23" label="Yarn Store">
          <TreeItem nodeId="24" label="Received Report"/>
          <TreeItem nodeId="25" label="knitting yarn D/L Report"/>
          <TreeItem nodeId="26" label="Sub-Contact Yarn D/L Report "/>
          <TreeItem nodeId="27" label="Sub-Contact Yarn Received Report"/>
          </TreeItem>
      
        <TreeItem nodeId="27" label="Accessories Store">
          <TreeItem nodeId="28" label="Shipment Challah Report"/>
          <TreeItem nodeId="29" label="Accessories Received Report"/>
         
        </TreeItem>
      
      <TreeItem nodeId="30" label="Grey Fabric Store">
          <TreeItem nodeId="31" label="Knitting Fabric Received"/>
          <TreeItem nodeId="32" label="Sub-Contact Fabric D/L Report"/>
          <TreeItem nodeId="33" label="Sub-Contact Fabric Received Report "/>
        </TreeItem>
        <TreeItem nodeId="34" label="Finished Fabric Store">
          <TreeItem nodeId="35" label="Fabric Received Report"/>
          <TreeItem nodeId="36" label="Fabric D/L Cutting Report"/>
          <TreeItem nodeId="37" label="Sub-Contact Fabric Received Report "/>
          </TreeItem>
         </TreeItem>
         
      
      




      <TreeItem nodeId="28" label=" Extra Maun">
        <TreeItem nodeId="6" label="Accessories Store">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
    </div>

  );
};

export default Menu;
