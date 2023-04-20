import React, { useEffect } from 'react';
import { getAllCampaign } from '../services/campaignService';
import { 
    Box, 
    TableContainer, 
    Table, 
    Thead, 
    Tbody, 
    Tr, 
    Th, 
    Td, 
    Button,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { useState } from "react"
import { NavLink } from 'react-router-dom';
function Campaign(props) {

    const [campaigns, setCampaigns] = useState([])

    useEffect(()=>{
        getAllCampaign()
        .then(res=> {
            console.log(res)
            setCampaigns(res.data)
        })
        .catch(e=> console.log(e))
    },  [])
    
      const handleDonateClick = (id) => {
          
        };
        
        // Render the DonateForm component where you want to call the handleDonateClick function.
        
      const bgColor = useColorModeValue("teal", "blue.800");
      const hoverBgColor = useColorModeValue("blue.50", "blue.300");
    
      return (
        <Box p={8}>
          <TableContainer as={Box} borderRadius="md" boxShadow="md">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th bg={bgColor} color="white" fontWeight="medium" fontSize="md" py={6} px={6}>
                    Amount
                  </Th>
                  <Th bg={bgColor} color="white" fontWeight="medium" fontSize="md" py={6} px={6}>
                    Reason
                  </Th>
                  <Th bg={bgColor} color="white" fontWeight="medium" fontSize="md" py={6} px={6}>
                    Action
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {campaigns.map((campaign) => (
                  <Tr key={campaign.id} _hover={{ bg: hoverBgColor }}>
                    <Td>{campaign.amount}</Td>
                    <Td>{campaign.reason}</Td>
                    <Td>
                        <NavLink to={`${campaign.creator}`}>
                            <Button colorScheme="blue">
                                Donate
                            </Button>
                        </NavLink>
                      
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      );
}

export default Campaign;