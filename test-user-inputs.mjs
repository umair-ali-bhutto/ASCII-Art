import inquirer from 'inquirer';

async function runPrompts() {
  // Input prompt
  const { username } = await inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Enter your username:'
    }
  ]);

  // Confirm prompt
  const { confirmChoice } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmChoice',
      message: 'Are you sure you want to proceed?',
      default: true // Default to "Yes"
    }
  ]);

  // Checkbox prompt
  const { features } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'features',
      message: 'Select the features you want:',
      choices: ['Feature 1', 'Feature 2', 'Feature 3']
    }
  ]);

  // Password prompt
  const { password } = await inquirer.prompt([
    {
      type: 'password',
      name: 'password',
      message: 'Enter your password:'
    }
  ]);

  // Rawlist prompt
  const { choice } = await inquirer.prompt([
    {
      type: 'rawlist',
      name: 'choice',
      message: 'Pick a number:',
      choices: ['Option 1', 'Option 2', 'Option 3']
    }
  ]);


  // Rawlist prompt
  const { choice3 } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice3',
      message: 'Pick a number:',
      choices: [
        { key: 'a', name: 'Option A', value: 'a' },
        { key: 'b', name: 'Option B', value: 'b' }
      ]
    }
  ]);

  // Expand prompt
  const { option } = await inquirer.prompt([
    {
      type: 'expand',
      name: 'option',
      message: 'Select an option:',
      choices: [
        { key: 'a', name: 'Option A', value: 'a' },
        { key: 'b', name: 'Option B', value: 'b' }
      ]
    }
  ]);

  // Print all answers
  console.log('\n--- Your Answers ---');
  console.log(`Username: ${username}`);
  console.log(`Proceed: ${confirmChoice}`);
  console.log(`Selected Features: ${features.join(', ')}`);
  console.log(`Password: ${password}`); // Note: Displaying passwords is generally not recommended
  console.log(`Selected Rawlist Option: ${choice}`);
  console.log(`Selected Rawlist Option: ${choice3}`);
  console.log(`Selected Expand Option: ${option}`);
}

// Run the prompts
runPrompts().catch(error => {
  console.error('Error:', error);
});