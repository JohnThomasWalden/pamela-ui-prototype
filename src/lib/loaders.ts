export async function loadMarkdown(path: string): Promise<string> {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load markdown: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown:', error);
    return '# Error loading plan\n\nUnable to load the plan content.';
  }
}

export async function loadTasks(path: string) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load tasks: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
} 