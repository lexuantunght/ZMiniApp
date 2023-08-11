import React from 'react';
import { App, SnackbarProvider, ZMPRouter } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import BottomTab from 'ui/bottom-tab';

const MyApp = () => {
	return (
		<RecoilRoot>
			<App>
				<SnackbarProvider>
					<ZMPRouter>
						<BottomTab />
					</ZMPRouter>
				</SnackbarProvider>
			</App>
		</RecoilRoot>
	);
};

export default MyApp;
