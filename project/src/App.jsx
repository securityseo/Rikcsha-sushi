import { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { Box,Button,Heading,Image } from '@chakra-ui/react'
import sushi1 from './assets/1.png'
import sushi2 from './assets/2.png'
import sushi3 from './assets/3.png'
import sushi4 from './assets/4.png'
import sushi5 from './assets/5.png'
import sushi6 from './assets/6.png'

function App() {
 
  return (
    <>
    <Box  width={'100%'} maxWidth={'1250px'} padding={'0 25px'} margin={'0 auto'}>
    <Box  fontFamily={'open sans'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
              <Heading w={'80%'} fontSize={'40px'} color={'#1B1B1B'} fontWeight={'600'}>А вы уже подписались на наш <Heading fontSize={'40px'} color={'#E07153'} fontWeight={'600'} >Instagram?</Heading></Heading>
            </Box>
            <Box>
              <Button display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'20px'} fontSize={'24px'} fontWeight={'700'} color={'#FFF'} width={'288px'} h={'72px'} background={'#E07153'} fontFamily={'open sans ,sans-serif'}><FaInstagram/>@mad1yarov_353</Button>
            </Box>
        </Box>
      </Box>


      <Box display='flex' gap={'12px'} mt={'58px'} >
            <Box display={'flex'} flexDirection={'column'} gap={'12px'}>
              <Box display={'flex'} gap={'12px'}>
              <Image src={sushi1} w={'280px'} h={'254px'}/> 
              <Image src={sushi2} w={'280px'} h={'254px'}/>
              </Box> 
               <Box>
                  <Image src={sushi3} w={'573px'} h={'254px'}/>
              </Box>
            </Box>
            <Box display={'flex'} gap={'13px'}>
              <Box display={'flex'} flexDirection={'column'} gap={'12px'}> 
              <Image src={sushi4} w={'299px'} h={'254px'}/> 
              <Image src={sushi5} w={'299px'} h={'254px'}/>
              </Box>
              <Box>  <Image src={sushi6} w={'288px'} h={'520px'}/></Box>
            </Box>
      </Box>
    </Box>
    </>
  )
}

export default App
