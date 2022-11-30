import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Stack, Typography } from '@mui/material';

export default function CheckboxesGroup({ ScannedData }) {
  const [checked, setChecked] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(false);
  // here is the form Data assigning To Initinal Value Of Options
  const Options = {
    id: 1,
    errorCustomMessage: '',
    errorsList: [
      { id: 1, errorName: 'كسر البرطمان', state: false },
      { id: 2, errorName: 'بحاجة لدهان', state: false },
      { id: 3, errorName: 'تلف القاعدة', state: false },
      { id: 4, errorName: 'تلف جسد الفانوس', state: false },
    ],
  };

  const [formData, setFormData] = React.useState(Options);
  // Check What Type Serial is, To Show THe Proper Options
  const CheckedArray = [];

  const CheckType = () => {
    // -----------------------Cheking  Variables
    // MechanicsOptions
    if (ScannedData === 'Car') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Elc-Generator') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    }
    // ElectricityOptions
    else if (ScannedData === 'Elc-Panel') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Master-Key') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Sub-Key') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Ground-Key') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Light-Cell') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Contactor-Key') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Timer') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Light-Pole') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Base-Torch') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Spear-Led') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    }
    // AgriculturalOptions
    else if (ScannedData === 'Grass-Machine') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Spray-Motor') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Metal-Machine') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    }
    // CamerasOptions
    else if (ScannedData === 'Camera') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Trans') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Driver') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Monitor') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    }
    // Network
    else if (ScannedData === 'Bein-Receiver') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'OSN-Receiver') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Node') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    }
    // poolsOptions
    else if (ScannedData === 'BeanBag') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'chare') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Chaise_Longue-chare') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Chazlong') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Umbrella') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Cleaning-brush') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Cleaning-Machine') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Stopcock') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Torch') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Motor') {
      const Options = {
        id: 1,
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else if (ScannedData === 'Elc-Substation') {
      const Options = {
        errorCustomMessage: '',
        errorsList: [
          { id: 1, errorName: 'كسر البرطمان', state: false },
          { id: 2, errorName: 'بحاجة لدهان', state: false },
          { id: 3, errorName: 'تلف القاعدة', state: false },
          { id: 4, errorName: 'تلف جسد الفانوس', state: false },
        ],
      };
      setFormData(Options);
      const errorsWithId = Options.errorsList.map((err) => err.state);
      const newArray = CheckedArray.push(errorsWithId);
      setChecked(newArray);
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  };

  React.useEffect(() => {
    CheckType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ScannedData]);

  const handleChange = (id) => {
    console.log(id);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '90%!important',
      }}
    >
      {errorMessage ? (
        <Typography sx={{ alignSelf: 'center' }} variant="h4">
          SomeThing Went Wrong, "{ScannedData}" is't valid Serial
        </Typography>
      ) : (
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
          <FormControl sx={{ m: 3, minWidth: '100%!important' }} component="fieldset" variant="standard">
            <FormLabel
              sx={{
                fontSize: '1.8rem',
                alignSelf: 'center',
                paddingBottom: '0.5rem',
                marginTop: '2.5rem',
              }}
            >
              {' '}
              Select Problems
            </FormLabel>
            <Box sx={{ alignSelf: 'start' }}>
              {formData.errorsList?.map((options) => (
                <Box key={options.id}>
                  <FormControlLabel
                    label={options.errorName}
                    control={
                      <Checkbox
                        checked={checked[options.id]}
                        onChange={() => handleChange(options.id)}
                        name={options.errorName}
                      />
                    }
                  />
                </Box>
              ))}
            </Box>
          </FormControl>
          <Box sx={{ marginBottom: '2rem', height: '100%' }}>
            <Button style={{ alignSelf: 'center', fontSize: '1.2rem' }} variant="contained" disableElevation>
              Updata
            </Button>
          </Box>
        </Stack>
      )}
    </Box>
  );
}
