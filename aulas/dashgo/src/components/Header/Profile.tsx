import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
	return (
		<Flex align="center">
			<Box mr="4" textAlign="right">
				<Text>Marcelo Carvalho</Text>
				<Text color="gray.300" fontSize="small">
					mpirescarvalho17@gmail.com
				</Text>
			</Box>

			<Avatar
				size="md"
				name="Marcelo Carvalho"
				src="https://github.com/mpirescarvalho.png"
			/>
		</Flex>
	);
}
